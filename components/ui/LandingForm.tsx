'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { landingFormList } from '@/lib/landing-form-list';
import { landingFormSchema, type LandingFormSchemaType } from '@/types/form-schema';

import FormField from './FormField';

const LandingForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LandingFormSchemaType>({
    resolver: zodResolver(landingFormSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<LandingFormSchemaType> = async (data) => {
    // console.log('Clean Data:', data);
    // const result = await handleFormAction(data);
    // if (result.success) reset();
  };

  return (
    <div className="flex flex-col w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="landing_form"
        className="flex flex-col gap-5 md:gap-6 xl:gap-7 rounded-2xl bg-form p-4 sm:p-6 lg:p-8 border border-white/10"
      >
        <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8 xl:gap-9">
          {landingFormList.map((item) => (
            <FormField
              key={item._id}
              item={item}
              register={register}
              control={control}
              errors={errors}
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            relative flex w-full items-center justify-center
            rounded-xl
            border border-gold-accent-muted/60
            bg-primary-deep
            px-5 py-4
            text-xs lg:text-sm
            font-bold uppercase tracking-widest text-gold-accent
            transition-[border-color, filter, transform] duration-300
            hover:border-gold-accent hover:brightness-105
            active:scale-95
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          <span className="relative">{isSubmitting ? 'Відправка...' : 'Обговорити проєкт'}</span>
        </button>
      </form>
    </div>
  );
};

export default LandingForm;
