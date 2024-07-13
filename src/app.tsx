import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
  AtSign,
  Plus,
} from "lucide-react";
import { useState } from "react";

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Invite your friends and plan your next trip!
          </p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />

              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="Where are you going?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />

              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="When?"
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestsInputOpen ? (
              <button
                onClick={closeGuestsInput}
                className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
              >
                Change location/date
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                onClick={openGuestsInput}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
              >
                Continue
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button
                type="button"
                onClick={openGuestsModal}
                className="flex items-center gap-2 flex-1 text-left"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="text-zinc-400 text-lg flex-1">
                  Who will be on the trip?
                </span>
              </button>

              <div className="w-px h-6 bg-zinc-800" />

              <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirm trip
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          When planning your trip through plann.er you automatically agree{" "}
          <br /> with our{" "}
          <a className="text-zinc-300 underline" href="#">
            terms of use
          </a>{" "}
          and{" "}
          <a className="text-zinc-300 underline" href="#">
            privacy policies
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Select guests</h2>
                <button type="button" onClick={closeGuestsModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Guests will receive emails to confirm their participation in the
                trip.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                <span className="text-zinc-300">jessica.white44@yahoo.com</span>
                <button type="button">
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>

              <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                <span className="text-zinc-300">jessica.white44@yahoo.com</span>
                <button type="button">
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>

              <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                <span className="text-zinc-300">jessica.white44@yahoo.com</span>
                <button type="button">
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>

              <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                <span className="text-zinc-300">jessica.white44@yahoo.com</span>
                <button type="button">
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>
            </div>

            <div className="w-full h-px bg-zinc-800" />

            <form className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <div className="px-2 flex items-center flex-1 gap-2">
                <AtSign className="size-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Enter the guest's email"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Invite
                <Plus className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
