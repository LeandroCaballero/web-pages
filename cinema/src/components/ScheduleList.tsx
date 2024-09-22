import { schedule } from "../utils/data";

const ScheduleList = () => {
  return (
    <div className="px-2">
      <div className="bg-[#434343] p-2">
        <p className="text-white font-extrabold">HORARIOS PARA CINE TAL</p>
      </div>
      <div className="space-y-1 mt-1">
        {schedule.map((schedule) => (
          <div className="bg-[#9f171a] text-white p-3 space-y-3">
            <div className="flex items-center gap-x-1">
              <p className="font-extrabold text-lg">{schedule.type}</p>
              <p className="uppercase text-xs">{schedule.language}</p>
            </div>
            <div className="grid grid-cols-6 gap-x-1">
              {schedule.hours.map((hour) => (
                <button className="transition-all duration-200 ease-out focus:bg-white focus:text-black border py-2 px-1 rounded-lg border-gray-500 text-center">
                  <p className="font-extrabold text-sm">{hour}</p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleList;
