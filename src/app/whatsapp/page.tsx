import { redirect } from 'next/navigation';

export default function WhatsAppRedirectPage() {
  redirect('https://api.whatsapp.com/send/?phone=447598216250&text&type=phone_number&app_absent=0');
}
