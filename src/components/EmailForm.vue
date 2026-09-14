<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const sending = ref(false)
const sent = ref(false)
const error = ref('')

const emit = defineEmits<{
  close: []
}>()

const sendEmail = async () => {
  error.value = ''
  sent.value = false

 if (!name.value || !email.value || !subject.value || !message.value) {
  error.value = t('emailForm.errorRequired')
  return
}

  sending.value = true

  try {
    const response = await fetch(
      'https://formspree.io/f/moeqonlw',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value
        })
      }
    )

    if (!response.ok) {
      throw new Error('Formspree request failed')
    }

    sent.value = true

    name.value = ''
    email.value = ''
    subject.value = ''
    message.value = ''

 } catch {
  error.value = t('emailForm.errorSend')
} finally {
    sending.value = false
  }
}
</script>

<template>
  <div class="email-form-wrapper">

    <div class="email-form-header">

      <div>
        <span class="email-form-label">
          {{ $t('contact.emailForm.label') }}
        </span>

        <h3>
          {{ $t('contact.emailForm.title') }}
        </h3>
      </div>

      <button
        type="button"
        class="email-form-close"
        aria-label="Close"
        @click="emit('close')"
      >
        <Icon icon="mdi:close" />
      </button>

    </div>


    <form
      class="email-form"
      @submit.prevent="sendEmail"
    >

      <div class="email-form-row">

        <div class="form-group">
          <label for="name">
            {{ $t('contact.emailForm.name') }}
          </label>

          <input
            id="name"
            v-model="name"
            type="text"
            autocomplete="name"
          />
        </div>

        <div class="form-group">
          <label for="email">
            {{ $t('contact.emailForm.email') }}
          </label>

          <input
            id="email"
            v-model="email"
            type="email"
            autocomplete="email"
          />
        </div>

      </div>


      <div class="form-group">

        <label for="subject">
          {{ $t('contact.emailForm.subject') }}
        </label>

        <input
          id="subject"
          v-model="subject"
          type="text"
        />

      </div>


      <div class="form-group">

        <label for="message">
          {{ $t('contact.emailForm.message') }}
        </label>

        <textarea
          id="message"
          v-model="message"
          rows="6"
        ></textarea>

      </div>


      <div
        v-if="error"
        class="form-message form-error"
      >
        {{ error }}
      </div>


      <div
        v-if="sent"
        class="form-message form-success"
      >
        {{ $t('contact.emailForm.success') }}
      </div>


      <div class="email-form-actions">

        <button
          type="button"
          class="email-form-cancel"
          @click="emit('close')"
        >
          {{ $t('contact.emailForm.cancel') }}
        </button>

        <button
          type="submit"
          class="email-form-submit"
          :disabled="sending"
        >
          <Icon icon="mdi:send" />

          <span>
            {{
              sending
                ? $t('contact.emailForm.sending')
                : $t('contact.emailForm.send')
            }}
          </span>
        </button>

      </div>

    </form>

  </div>
</template>


<style scoped>

.email-form-wrapper {
  margin-top: 24px;

  padding: 28px;

  background:
    linear-gradient(
      145deg,
      rgba(7, 16, 28, 0.96),
      rgba(3, 7, 18, 0.92)
    );

  border: 1px solid rgba(96, 165, 250, 0.18);

  border-radius: 8px;

  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.25);
}


.email-form-header {
  display: flex;

  align-items: flex-start;
  justify-content: space-between;

  gap: 20px;

  margin-bottom: 28px;
}


.email-form-label {
  display: block;

  margin-bottom: 8px;

  color: #38bdf8;

  font-size: 0.7rem;

  font-weight: 700;

  letter-spacing: 0.15em;

  text-transform: uppercase;
}


.email-form-header h3 {
  margin: 0;

  color: #f8fafc;

  font-size: 1.5rem;

  letter-spacing: -0.03em;
}


.email-form-close {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;

  padding: 0;

  color: #64748b;

  background: transparent;

  border: 1px solid rgba(96, 165, 250, 0.12);

  border-radius: 7px;

  cursor: pointer;

  font-size: 1.1rem;

  transition:
    color 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;
}


.email-form-close:hover {
  color: #38bdf8;

  border-color: rgba(0, 174, 255, 0.35);

  background: rgba(0, 174, 255, 0.06);
}


.email-form {
  display: flex;

  flex-direction: column;

  gap: 20px;
}


.email-form-row {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 20px;
}


.form-group {
  display: flex;

  flex-direction: column;

  gap: 8px;
}


.form-group label {
  color: #94a3b8;

  font-size: 0.75rem;

  font-weight: 600;

  letter-spacing: 0.04em;
}


.form-group input,
.form-group textarea {
  width: 100%;

  box-sizing: border-box;

  padding: 13px 14px;

  color: #e2e8f0;

  background: rgba(2, 6, 23, 0.7);

  border: 1px solid rgba(96, 165, 250, 0.14);

  border-radius: 7px;

  outline: none;

  font-family: inherit;

  font-size: 0.9rem;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}


.form-group textarea {
  resize: vertical;

  min-height: 130px;
}


.form-group input:focus,
.form-group textarea:focus {
  border-color: rgba(0, 174, 255, 0.45);

  box-shadow:
    0 0 0 3px rgba(0, 174, 255, 0.05);
}


.email-form-actions {
  display: flex;

  justify-content: flex-end;

  gap: 12px;

  margin-top: 4px;
}


.email-form-cancel,
.email-form-submit {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 11px 18px;

  border-radius: 7px;

  font-family: inherit;

  font-size: 0.82rem;

  font-weight: 600;

  cursor: pointer;

  transition:
    border-color 0.25s ease,
    background 0.25s ease,
    color 0.25s ease,
    box-shadow 0.25s ease;
}


.email-form-cancel {
  color: #94a3b8;

  background: transparent;

  border: 1px solid rgba(96, 165, 250, 0.12);
}


.email-form-cancel:hover {
  color: #cbd5e1;

  border-color: rgba(96, 165, 250, 0.25);
}


.email-form-submit {
  color: #e0f2fe;

  background: rgba(0, 174, 255, 0.1);

  border: 1px solid rgba(0, 174, 255, 0.3);
}


.email-form-submit:hover:not(:disabled) {
  background: rgba(0, 174, 255, 0.16);

  border-color: rgba(0, 174, 255, 0.5);

  box-shadow:
    0 0 20px rgba(0, 174, 255, 0.08);
}


.email-form-submit:disabled {
  opacity: 0.5;

  cursor: not-allowed;
}


.form-message {
  padding: 11px 14px;

  border-radius: 7px;

  font-size: 0.82rem;
}


.form-error {
  color: #fca5a5;

  background: rgba(239, 68, 68, 0.06);

  border: 1px solid rgba(239, 68, 68, 0.15);
}


.form-success {
  color: #86efac;

  background: rgba(34, 197, 94, 0.06);

  border: 1px solid rgba(34, 197, 94, 0.15);
}


@media (max-width: 650px) {

  .email-form-wrapper {
    padding: 22px;
  }

  .email-form-row {
    grid-template-columns: 1fr;
  }

}


@media (max-width: 430px) {

  .email-form-wrapper {
    padding: 18px;
  }

  .email-form-actions {
    flex-direction: column-reverse;
  }

  .email-form-cancel,
  .email-form-submit {
    width: 100%;
  }

}

</style>