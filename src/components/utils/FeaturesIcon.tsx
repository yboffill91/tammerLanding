function FeatureIcon({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <Icon className='w-8 h-8 text-slate-100' />
      <span className='text-sm text-slate-100 text-center'>{text}</span>
    </div>
  );
}

export default FeatureIcon;
