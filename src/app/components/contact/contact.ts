import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmitStatus {
  type: 'success' | 'error';
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  formData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitStatus: SubmitStatus | null = null;

  async onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitStatus = null;

    try {
      // Simulate form submission (in a real app, this would send to a server)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      this.submitStatus = {
        type: 'success',
        message: 'Thank you for your message! I\'ll get back to you soon.'
      };
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } catch (error) {
      this.submitStatus = {
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      };
    } finally {
      this.isSubmitting = false;
      
      // Clear status after 5 seconds
      setTimeout(() => {
        this.submitStatus = null;
      }, 5000);
    }
  }
}
