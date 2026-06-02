import { vukafrikEventStats } from "@/data/vukafrik-content";

const Stats = () => {
  return (
    <section className="vuka-stats-section pt-140 pb-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="td-schedule-2-title-wrap text-center mb-35">
              <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-25">
                Chiffres cles
              </span>
              <h2 className="td-section-title mb-10">
                Des reperes clairs sur l&apos;ampleur du rendez-vous
              </h2>
              <p className="td-section-text">
                Ces indicateurs donnent une lecture immediate de l&apos;evenement et
                de la dynamique qu&apos;il veut installer a Kinshasa.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {vukafrikEventStats.map((item) => (
            <div key={item.label} className="col-xl-4 col-md-6">
              <div className="vuka-stat-card mb-25">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
