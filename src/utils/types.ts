import { StaticImageData } from "next/image";

interface EventDataType {
  id: number;
  start_time: string;
  end_time: string;
  topic: string;
  category: string;
  image: StaticImageData;
  key_points?: string[];
  speakers: number[];
  venue: string;
  date: string;
  descriptive_paragraphs: string[];
}

interface GeneralContactFormType {
  name: string;
  email: string;
  phone: string;
  request_type: string;
  message: string;
  accept_review_and_contact: boolean;
}

interface AttendeeFormType {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  organisation: string;
  function: string;
  country: string;
  city: string;
  participant_type: string;
  participation_days: string;
  accept_review_and_contact: boolean;
}

interface SpeakerDataType {
  id: number;
  image: StaticImageData;
  name: string;
  title: string;
  biography: string;
  email?: string;
  phone?: string;
  address?: string;
  years_of_experience?: string;
}

interface SpeakerFormType {
  name: string;
  email: string;
  phone: string;
  organisation: string;
  title: string;
  biography: string;
  proposed_topic: string;
  preference_of_session: string;
  linkedin_or_website: string;
  speaking_experience: string;
  additional_notes: string;
  accept_review_and_contact: boolean;
}

interface SponsorFormType {
  name: string;
  contact_person: string;
  email: string;
  phone: string;
  website: string;
  partnership_category: string;
  message: string;
  budget_range: string;
  preferred_visibility_zone: string;
  interest_sector: string;
  accept_review_and_contact: boolean;
}

interface ExhibitorFormType {
  organisation: string;
  contact_person: string;
  email: string;
  phone: string;
  website: string;
  sector: string;
  product_service_description: string;
  preferred_format: string;
  specific_needs: string;
  social_media_links: string;
  no_of_participants: string;
  accept_review_and_contact: boolean;
}

interface VolunteerFormType {
  full_name: string;
  email: string;
  phone: string;
  city: string;
  availability: string;
  interest_area: string;
  skills: string;
  previous_event_experience: string;
  accept_review_and_contact: boolean;
}

interface JournalistFormType {
  organisation: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  media_type: string;
  request_subject: string;
  previous_content_links: string;
  press_card_number: string;
  no_of_media_representatives: string;
  specific_technical_needs: string;
  accept_review_and_contact: boolean;
}

interface InBetweenPathDataType {
  label: string;
  href: string;
}

interface FaqDataType {
  id: number;
  page: string;
  title: string;
  desc: string;
  showAnswer: boolean;
}

interface ApiResponseType {
  data: any;
  status: number;
  success: boolean;
}
export type {
  EventDataType,
  SpeakerDataType,
  InBetweenPathDataType,
  FaqDataType,
  AttendeeFormType,
  SponsorFormType,
  SpeakerFormType,
  ExhibitorFormType,
  JournalistFormType,
  VolunteerFormType,
  GeneralContactFormType,
  ApiResponseType,
};
