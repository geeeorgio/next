import type { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

import type { LandingFormListItemType, LandingFormSchemaType } from '@/types/form-schema';

interface FormFieldProps {
  item: LandingFormListItemType;
  control: Control<LandingFormSchemaType>;
  errors: FieldErrors<LandingFormSchemaType>;
  register: UseFormRegister<LandingFormSchemaType>;
}

const FormField = ({ item, register, control, errors }: FormFieldProps) => {
  const error = errors[item._name];

  return (
    <div className="flex flex-col relative group">
      <label
        htmlFor={item._name}
        className={`absolute left-4 -top-2.5 font-semibold text-xs bg-form px-2 transition-colors group-focus-within:text-gold-accent
          ${error ? 'text-red-500/80 group-focus-within:text-red-500' : 'text-foreground'}`}
      >
        {item._label_ua}
      </label>

      {item._name === 'phone_number' ? (
        <Controller
          name="phone_number"
          control={control}
          render={({ field: { onChange, value, name } }) => (
            <PatternFormat
              id={name}
              format="+38 (###) ###-##-##"
              mask="_"
              value={value}
              onValueChange={(values) => onChange(values.value)}
              placeholder={item._placeholder_ua}
              className={`outline-none text-sm border rounded-xl px-4 py-4 bg-transparent transition-all duration-300
                ${error ? 'border-red-500/50 focus:border-red-500' : 'border-foreground-muted/30 focus:border-gold-accent/50 focus:ring-1 focus:ring-gold-accent/20'}`}
            />
          )}
        />
      ) : (
        <input
          {...register(item._name)}
          id={item._name}
          type={item._type}
          placeholder={item._placeholder_ua}
          maxLength={item._name === 'name' ? 20 : undefined}
          aria-invalid={error ? 'true' : 'false'}
          className={`outline-none text-sm border rounded-xl px-4 py-4 bg-transparent transition-all duration-300
            ${error ? 'border-red-500/50 focus:border-red-500' : 'border-foreground-muted/30 focus:border-gold-accent/50 focus:ring-1 focus:ring-gold-accent/20'}`}
        />
      )}

      {error && <span className="text-[10px] text-red-500 mt-1 ml-2">{error.message}</span>}
    </div>
  );
};

export default FormField;
