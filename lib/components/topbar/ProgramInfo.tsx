export interface ProgramInfoModel {
  programLabel?: string;
  program: string;
  developerLabel?: string;
  developer: string;
  screenLabel?: string;
  screen: string;
  creationYearLabel?: string;
  creationYear: string;
}

type ProgramInfoProps = {
  info?: ProgramInfoModel;
};

type ProgramInfoItemProps = {
  label: string;
  text: string;
};

export const ProgramInfo = ({ info }: ProgramInfoProps) => {
  return (
    <div className="flex w-5 h-5 bg-becblue-500 rounded-full text-white items-center justify-center text-sm pt-[1px] relative font-bold group">
      i
      {info && (
        <div className="bg-gray-600 z-30 absolute top-6 right-1 p-2.5 rounded text-xs hidden group-hover:block">
          <ul className="p-0 m-0 font-normal">
            <ProgramInfoItem
              label={info.programLabel ? info.programLabel : "Programm"}
              text={info.program}
            />
            <ProgramInfoItem
              label={
                info.developerLabel ? info.developerLabel : "Programmierer"
              }
              text={info.developer}
            />
            <ProgramInfoItem
              label={info.screenLabel ? info.screenLabel : "Bildschirm"}
              text={info.screen}
            />
            <ProgramInfoItem
              label={
                info.creationYearLabel
                  ? info.creationYearLabel
                  : "Erstellungsjahr"
              }
              text={info.creationYear}
            />
          </ul>
        </div>
      )}
    </div>
  );
};

const ProgramInfoItem = (props: ProgramInfoItemProps) => {
  return (
    <li className="flex gap-x-1">
      <span className="text-xs w-20">{props.label}</span>
      <span className="whitespace-nowrap font-bold">{props.text}</span>
    </li>
  );
};
