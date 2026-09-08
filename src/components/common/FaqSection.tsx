"use client";

import { useState } from "react";
import Link from "next/link";
import type { FaqGroup } from "@/data/FaqData";

export default function FaqSection({ title, introduction, groups, prefix }: {
  title: string;
  introduction: string;
  groups: FaqGroup[];
  prefix: string;
}) {
  const [openId, setOpenId] = useState<string | null>(groups[0]?.items[0]?.id ?? null);
  return (
    <section className="td-faq-area pt-135 pb-140" aria-labelledby={`${prefix}-title`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="td-faq-wrapper">
              <div className="text-center mb-40">
                <h2 id={`${prefix}-title`} className="td-faq-title mb-20">{title}</h2>
                <p className="td-faq-para">{introduction}</p>
              </div>
              {groups.map(group => (
                <section key={group.id} className="mb-40" aria-labelledby={`${prefix}-${group.id}`}>
                  <h3 id={`${prefix}-${group.id}`} className="mb-20">{group.title}</h3>
                  <div className="accordion">
                    {group.items.map(item => {
                      const expanded = openId === item.id;
                      const id = `${prefix}-${group.id}-${item.id}`;
                      return (
                        <div key={item.id} className="accordion-item">
                          <h4 className="accordion-header">
                            <button id={`${id}-button`} className={`accordion-button ${expanded ? "" : "collapsed"}`} type="button" aria-expanded={expanded} aria-controls={`${id}-answer`} onClick={() => setOpenId(expanded ? null : item.id)}>
                              {item.title}<span className="accordion-btn" aria-hidden="true" />
                            </button>
                          </h4>
                          <div id={`${id}-answer`} aria-labelledby={`${id}-button`} hidden={!expanded}>
                            <div className="accordion-body td-faq-details-para">
                              <p>{item.desc}</p>
                              {item.links && <ul className="list-unstyled d-flex flex-wrap gap-3 mb-0">
                                {item.links.map(link => <li key={link.href}><Link href={link.href} className="text-decoration-underline" style={{ overflowWrap: "anywhere" }}>{link.label}</Link></li>)}
                              </ul>}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
