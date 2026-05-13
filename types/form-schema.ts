import * as z from 'zod';

const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s0-9])+$/;
const usernameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s'-]{2,20}$/;

export const FORM_NAMES_LIST = ['name', 'phone_number', 'link', 'telegram'] as const;
export type FormNamesTypes = (typeof FORM_NAMES_LIST)[number];

export interface LandingFormListItemType {
  _id: string;
  _label_ua: string;
  _label_en: string;
  _placeholder_ua: string;
  _placeholder_en: string;
  _name: FormNamesTypes;
  _type: string;
  _required: boolean;
}

export const landingFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ім'я занадто коротке")
    .max(20, "Ім'я занадто довге (макс. 20 символів)")
    .regex(usernameRegex, "Ім'я має містити лише букви")
    .or(z.literal('')),
  phone_number: z
    .string()
    .min(10, 'Номер занадто короткий')
    .max(10, 'Перевірте номер')
    .regex(phoneRegex, 'Невірний формат номера')
    .or(z.literal('')),
  link: z
    .url({
      protocol: /^https$/,
      error: 'Будь ласка надайте посилання на безпечний ресурс',
    })
    .normalize()
    .or(z.literal(''))
    .optional(),
  telegram: z
    .string()
    .startsWith('@', 'Можливо ви забули додати: @ на початку?')
    .or(z.literal(''))
    .optional(),
});

export type LandingFormSchemaType = z.infer<typeof landingFormSchema>;
