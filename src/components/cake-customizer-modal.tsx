import React, { useState } from "react";
import { X, Check, Upload, Calendar, Clock, MapPin, Sparkles, MessageCircle, Image as ImageIcon, Truck, Store, AlertCircle } from "lucide-react";
import { BRAND, type BakeryProductItem } from "../lib/bakery-data";

export interface CakeCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: BakeryProductItem | null;
}

const CAKE_FLAVOURS = [
  "Belgian Chocolate Truffle",
  "Red Velvet Cream Cheese",
  "Golden Butterscotch Crunch",
  "Grand Black Forest & Cherries",
  "Fresh Pineapple & Seasonal Fruits",
  "Madagascar Vanilla Bean",
  "Rich Coffee Mocha",
  "Bespoke / Custom Request",
];

const WEIGHT_OPTIONS = [
  { id: "1-lb", label: "1 Pound (0.5 Kg)", price: "₹550", serves: "3–5 Guests" },
  { id: "2-lb", label: "2 Pound (1.0 Kg)", price: "₹999", serves: "6–10 Guests", popular: true },
  { id: "3-lb", label: "3 Pound (1.5 Kg)", price: "₹1,499", serves: "12–15 Guests" },
  { id: "4-lb", label: "4 Pound (2.0 Kg)", price: "₹1,999", serves: "18–20 Guests" },
  { id: "5-lb-plus", label: "5+ Pound (Multi-Tier)", price: "Custom Quote", serves: "Wedding & Grand Party" },
];

const TIME_SLOTS = [
  "Morning (10:00 AM – 1:00 PM)",
  "Afternoon (1:00 PM – 5:00 PM)",
  "Evening (5:00 PM – 9:00 PM)",
];

export function CakeCustomizerModal({ isOpen, onClose, product }: CakeCustomizerModalProps) {
  if (!isOpen) return null;

  // Form State
  const [selectedFlavour, setSelectedFlavour] = useState<string>(
    product?.name?.toLowerCase().includes("chocolate")
      ? "Belgian Chocolate Truffle"
      : product?.name?.toLowerCase().includes("velvet")
      ? "Red Velvet Cream Cheese"
      : "Belgian Chocolate Truffle"
  );
  const [selectedWeight, setSelectedWeight] = useState<string>("2-lb");
  const [isEggless, setIsEggless] = useState<boolean>(true);
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">("delivery");
  const [deliveryDate, setDeliveryDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0] ?? "";
  });
  const [timeSlot, setTimeSlot] = useState<string>(TIME_SLOTS[2] ?? "Evening (5:00 PM – 9:00 PM)");
  const [deliveryAddress, setDeliveryAddress] = useState<string>("");
  const [cakeMessage, setCakeMessage] = useState<string>("");
  const [customerName, setCustomerName] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");

  // Gallery Reference Photo Upload State
  const [referencePhoto, setReferencePhoto] = useState<File | null>(null);
  const [referencePhotoPreview, setReferencePhotoPreview] = useState<string | null>(null);

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setReferencePhoto(file);
      const previewUrl = URL.createObjectURL(file);
      setReferencePhotoPreview(previewUrl);
    }
  };

  const handleRemovePhoto = () => {
    setReferencePhoto(null);
    if (referencePhotoPreview) {
      URL.revokeObjectURL(referencePhotoPreview);
      setReferencePhotoPreview(null);
    }
  };

  const defaultWeight = WEIGHT_OPTIONS[1]!;
  const selectedWeightObj = WEIGHT_OPTIONS.find((w) => w.id === selectedWeight) ?? defaultWeight;

  const handleConfirmWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const cakeTitle = product?.name || "Bespoke Custom Cake";
    const dietaryText = isEggless ? "100% Pure Eggless (Vegetarian)" : "Regular with Egg";
    const deliveryDetail =
      deliveryType === "delivery"
        ? `Home Delivery in Dinanagar (${deliveryAddress || "Address provided in chat"})`
        : "Self-Pickup at Shree Ram Market, Dinanagar";
    const photoNote = referencePhoto
      ? `YES (Selected from phone gallery: ${referencePhoto.name} — will share in chat!)`
      : "Standard design as shown on website";

    const messageLines = [
      `🎂 *NEW CAKE ORDER INQUIRY — KARSHNI BAKERS* 🎂`,
      `------------------------------------------`,
      `🍰 *Cake Model:* ${cakeTitle}`,
      `🍓 *Flavour:* ${selectedFlavour}`,
      `⚖️ *Weight / Size:* ${selectedWeightObj.label} (${selectedWeightObj.price})`,
      `🌱 *Dietary:* ${dietaryText}`,
      `📅 *Date Needed:* ${deliveryDate} • ${timeSlot}`,
      `📍 *Delivery / Pickup:* ${deliveryDetail}`,
      cakeMessage ? `✍️ *Message on Cake:* "${cakeMessage}"` : null,
      `📸 *Reference Photo:* ${photoNote}`,
      customerName ? `👤 *Customer Name:* ${customerName}` : null,
      customerPhone ? `📞 *Customer Phone:* ${customerPhone}` : null,
      `------------------------------------------`,
      `Please confirm availability, custom design details, and total pricing. Thank you!`,
    ].filter(Boolean);

    const fullMessage = messageLines.join("\n");
    const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF7F2] text-[#22130A] rounded-3xl border border-[#C69A52]/40 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="relative bg-gradient-to-r from-[#24130A] via-[#351C0F] to-[#24130A] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#C69A52]/30 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C69A52]/20 border border-[#C69A52]/60 flex items-center justify-center text-[#DFC085]">
              <Sparkles size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#DFC085] block">
                Karshni Cake Atelier • Dinanagar
              </span>
              <h3 className="font-serif text-lg sm:text-2xl font-bold text-white">
                Customize & Order Your Cake
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleConfirmWhatsApp} className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1">
          {/* Selected Cake Mini Preview Card */}
          {product && (
            <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-[#E8D9C5] shadow-xs">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-[#E8D9C5]"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B87333] font-semibold">
                  Selected Design
                </span>
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#22130A] truncate">
                  {product.name}
                </h4>
                <p className="text-xs text-[#6C503D] line-clamp-1">{product.description}</p>
              </div>
            </div>
          )}

          {/* 1. Flavour Selection */}
          <div className="space-y-2.5">
            <label className="text-xs font-serif font-bold tracking-wide uppercase text-[#22130A] flex items-center gap-1.5">
              <span>1. Choose Cake Flavour (ਕਿਹੜਾ ਫਲੇਵਰ ਚਾਹੀਦਾ)</span>
              <span className="text-[#EF493C]">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CAKE_FLAVOURS.map((flavour) => {
                const isSelected = selectedFlavour === flavour;
                return (
                  <button
                    key={flavour}
                    type="button"
                    onClick={() => setSelectedFlavour(flavour)}
                    className={`p-2.5 rounded-xl text-left text-xs font-serif transition-all flex items-center justify-between border cursor-pointer ${
                      isSelected
                        ? "bg-[#24130A] text-[#DFC085] border-[#C69A52] font-semibold shadow-xs"
                        : "bg-white text-[#5A3F2D] border-[#E8D9C5] hover:border-[#C69A52]"
                    }`}
                  >
                    <span>{flavour}</span>
                    {isSelected && <Check size={14} className="text-[#DFC085]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Weight / Size in Pounds */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-serif font-bold tracking-wide uppercase text-[#22130A] flex items-center gap-1.5">
                <span>2. Cake Weight in Pounds (ਕਿੰਨੇ ਪਾਊਂਡ ਦਾ)</span>
                <span className="text-[#EF493C]">*</span>
              </label>
              <span className="text-[11px] font-mono text-[#B87333]">
                Selected: {selectedWeightObj.price}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {WEIGHT_OPTIONS.map((w) => {
                const isSelected = selectedWeight === w.id;
                return (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => setSelectedWeight(w.id)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#24130A] text-white border-[#C69A52] shadow-xs"
                        : "bg-white text-[#22130A] border-[#E8D9C5] hover:border-[#C69A52]"
                    }`}
                  >
                    <span className="text-xs font-serif font-bold block">{w.label}</span>
                    <span className="text-[11px] font-mono text-[#B87333] font-semibold mt-0.5">
                      {w.price}
                    </span>
                    <span className="text-[9.5px] text-[#8A6750] block mt-1">{w.serves}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Dietary Preference (Eggless / Regular) */}
          <div className="space-y-2">
            <label className="text-xs font-serif font-bold tracking-wide uppercase text-[#22130A]">
              3. Dietary Preference
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsEggless(true)}
                className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-serif transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isEggless
                    ? "bg-[#2E7D32] text-white border-[#2E7D32] font-semibold shadow-xs"
                    : "bg-white text-[#5A3F2D] border-[#E8D9C5]"
                }`}
              >
                <span>🌱 100% Eggless (Pure Veg)</span>
                {isEggless && <Check size={14} />}
              </button>

              <button
                type="button"
                onClick={() => setIsEggless(false)}
                className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-serif transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  !isEggless
                    ? "bg-[#24130A] text-[#DFC085] border-[#C69A52] font-semibold shadow-xs"
                    : "bg-white text-[#5A3F2D] border-[#E8D9C5]"
                }`}
              >
                <span>🥚 Regular With Egg</span>
                {!isEggless && <Check size={14} />}
              </button>
            </div>
          </div>

          {/* 4. Date & Time Required */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-serif font-bold tracking-wide uppercase text-[#22130A] flex items-center gap-1.5">
                <Calendar size={13} className="text-[#B87333]" />
                <span>Delivery / Event Date (ਕਿੰਨੇ ਡੇਟ ਨੂੰ)</span>
              </label>
              <input
                type="date"
                required
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DECDB8] text-xs font-serif text-[#22130A] focus:outline-none focus:border-[#C69A52]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-serif font-bold tracking-wide uppercase text-[#22130A] flex items-center gap-1.5">
                <Clock size={13} className="text-[#B87333]" />
                <span>Preferred Time Slot</span>
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DECDB8] text-xs font-serif text-[#22130A] focus:outline-none focus:border-[#C69A52]"
              >
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 5. Delivery Location (Home Delivery or Store Pickup) */}
          <div className="space-y-2.5">
            <label className="text-xs font-serif font-bold tracking-wide uppercase text-[#22130A] flex items-center gap-1.5">
              <MapPin size={13} className="text-[#B87333]" />
              <span>5. Delivery Option (ਕਿੱਥੇ ਚਾਹੀਦਾ ਵਾ)</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setDeliveryType("delivery")}
                className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                  deliveryType === "delivery"
                    ? "bg-[#24130A] text-white border-[#C69A52]"
                    : "bg-white text-[#22130A] border-[#E8D9C5]"
                }`}
              >
                <Truck size={18} className="text-[#DFC085] flex-shrink-0" />
                <div>
                  <span className="text-xs font-serif font-bold block">🚚 Home Delivery</span>
                  <span className="text-[10px] text-[#DFC085]">Dinanagar & nearby GT Road</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setDeliveryType("pickup")}
                className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                  deliveryType === "pickup"
                    ? "bg-[#24130A] text-white border-[#C69A52]"
                    : "bg-white text-[#22130A] border-[#E8D9C5]"
                }`}
              >
                <Store size={18} className="text-[#DFC085] flex-shrink-0" />
                <div>
                  <span className="text-xs font-serif font-bold block">🏪 Self Store Pickup</span>
                  <span className="text-[10px] text-[#DFC085]">Shree Ram Market, Dinanagar</span>
                </div>
              </button>
            </div>

            {deliveryType === "delivery" && (
              <input
                type="text"
                placeholder="Enter complete address, ward, or nearby landmark in Dinanagar..."
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DECDB8] text-xs font-serif text-[#22130A] focus:outline-none focus:border-[#C69A52] placeholder:text-[#8A6750]/60 mt-1"
              />
            )}
          </div>

          {/* 6. Message on Cake */}
          <div className="space-y-1.5">
            <label className="text-xs font-serif font-bold tracking-wide uppercase text-[#22130A] flex items-center justify-between">
              <span>6. Name / Message on Cake (ਕੇਕ ਉੱਤੇ ਨਾਮ/ਸੰਦੇਸ਼)</span>
              <span className="text-[10px] text-[#8A6750] font-normal">Optional</span>
            </label>
            <input
              type="text"
              placeholder='e.g. "Happy 25th Birthday Aman" or "Happy Anniversary Mom & Dad"'
              value={cakeMessage}
              onChange={(e) => setCakeMessage(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DECDB8] text-xs font-serif text-[#22130A] focus:outline-none focus:border-[#C69A52] placeholder:text-[#8A6750]/60"
            />
          </div>

          {/* 7. Upload Design Photo From Phone Gallery */}
          <div className="space-y-2 p-4 rounded-2xl bg-gradient-to-r from-[#F7F0E6] to-[#EFE5D6] border border-[#DECDB8]">
            <div className="flex items-center justify-between">
              <label className="text-xs font-serif font-bold tracking-wide uppercase text-[#22130A] flex items-center gap-1.5">
                <ImageIcon size={14} className="text-[#B87333]" />
                <span>7. Share Design Reference Photo (ਆਪਣੀ ਗੈਲਰੀ 'ਚੋਂ ਫ਼ੋਟੋ)</span>
              </label>
              <span className="text-[10px] text-[#B87333] font-mono font-medium">From Gallery</span>
            </div>
            <p className="text-[11px] text-[#6C503D] font-light leading-snug">
              Got a Pinterest, Instagram or screenshot photo of the exact cake design you want? Select it here:
            </p>

            {!referencePhotoPreview ? (
              <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-[#C69A52]/60 hover:border-[#C69A52] rounded-xl bg-white/70 hover:bg-white cursor-pointer transition-all">
                <Upload size={22} className="text-[#B87333] mb-1.5" />
                <span className="text-xs font-serif font-semibold text-[#22130A]">
                  Tap to Choose Photo from Gallery
                </span>
                <span className="text-[10px] text-[#8A6750] mt-0.5">JPG, PNG, WebP or Screenshots</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoSelect}
                  className="hidden"
                />
              </label>
            ) : (
              <div className="relative flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#C69A52]/40">
                <img
                  src={referencePhotoPreview}
                  alt="Reference Preview"
                  className="w-16 h-16 rounded-lg object-cover border border-[#E8D9C5]"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono uppercase text-[#2E7D32] font-semibold flex items-center gap-1">
                    <Check size={12} /> Reference Photo Selected
                  </span>
                  <p className="text-xs font-serif text-[#22130A] truncate mt-0.5">
                    {referencePhoto?.name}
                  </p>
                  <span className="text-[10px] text-[#8A6750]">
                    Ready to attach in WhatsApp chat!
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleRemovePhoto}
                  className="text-xs text-[#EF493C] hover:text-red-700 font-serif font-semibold p-2"
                >
                  Change
                </button>
              </div>
            )}
          </div>

          {/* 8. Customer Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="space-y-1">
              <label className="text-[11px] font-serif font-semibold uppercase text-[#5A3F2D]">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Gurpreet Singh"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#DECDB8] text-xs font-serif text-[#22130A] focus:outline-none focus:border-[#C69A52]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-serif font-semibold uppercase text-[#5A3F2D]">
                Your Contact Number
              </label>
              <input
                type="tel"
                placeholder="e.g. 98765 43210"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#DECDB8] text-xs font-serif text-[#22130A] focus:outline-none focus:border-[#C69A52]"
              />
            </div>
          </div>

          {/* Submit Button & Confirmation Notice */}
          <div className="pt-2 flex flex-col gap-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#D9A356] via-[#C98B35] to-[#B37021] text-[#1E110A] font-serif font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle size={18} />
              <span>Confirm & Order on WhatsApp →</span>
            </button>

            <p className="text-[10px] text-center text-[#8A6750] leading-snug">
              ⚡ Instant WhatsApp Confirmation • Master Chefs at Shree Ram Market, Dinanagar
              {referencePhoto && " • Note: Attach your selected reference photo when the chat opens!"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
