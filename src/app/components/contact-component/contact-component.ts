import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from '../../config/emailjs.config';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent {
  formState = {
    name: '',
    email: '',
    tlf: '',
    message: '',
  };

  isSubmitting = false;
  isSubmitted = false;

  async handleSubmit() {
    this.isSubmitting = true;
    try {
      if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        throw new Error('Faltan credenciales de EmailJS');
      }

      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

      const templateParams = {
        from_name: this.formState.name,
        from_email: this.formState.email,
        tlf: this.formState.tlf,
        message: this.formState.message,
        full_message: `Has recibido un nuevo mensaje de ${this.formState.name}.

Teléfono: ${this.formState.tlf}

Correo electrónico: ${this.formState.email}

Mensaje:
${this.formState.message}`,
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      this.isSubmitted = true;
      this.formState = { name: '', email: '', tlf: '', message: '' };
      setTimeout(() => (this.isSubmitted = false), 3000);
    } catch (err) {
      console.error('Error enviando el mensaje con EmailJS:', err);
      alert('No se pudo enviar el mensaje. Intenta nuevamente.');
    } finally {
      this.isSubmitting = false;
    }
  }
}
