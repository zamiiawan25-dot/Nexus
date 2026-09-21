import React, { useState } from 'react';
import { X, Plus, Image as ImageIcon, Upload, Building, Check, Sparkles } from 'lucide-react';
import { Property } from '../types';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (newProject: Property) => void;
}

const PRESET_IMAGES = [
  {
    label: 'Modern Luxury Villa',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    category: 'Residential',
  },
  {
    label: 'Commercial Plaza',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    category: 'Commercial',
  },
  {
    label: 'Margalla Hillside Residence',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    category: 'Residential',
  },
  {
    label: 'Builder & Development Site',
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1200&q=80',
    category: 'Builder',
  },
  {
    label: 'Executive Penthouse',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    category: 'Residential',
  },
  {
    label: 'Commercial Avenue',
    url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    category: 'Commercial',
  },
];

export const AddProjectModal: React.FC<AddProjectModalProps> = ({
  isOpen,
  onClose,
  onAddProject,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'Residential' | 'Commercial' | 'Builder'>('Residential');
  const [location, setLocation] = useState('Islamabad (Margalla Enclave / Jinnah Ave)');
  const [tag, setTag] = useState('Featured Project');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState(PRESET_IMAGES[0].url);
  const [featuresInput, setFeaturesInput] = useState('Modern Architecture, Landscaped Grounds, High Ceilings');
  const [projectType, setProjectType] = useState('Premium Luxury Project');
  const [sector, setSector] = useState('Islamabad Capital Territory');
  const [consultationStatus, setConsultationStatus] = useState('Available for Consultation');
  const [imageTab, setImageTab] = useState<'presets' | 'url' | 'upload'>('presets');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMsg('Image file size must be under 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImageUrl(reader.result);
          setErrorMsg('');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMsg('Please enter a project title');
      return;
    }
    if (!description.trim()) {
      setErrorMsg('Please enter a project description');
      return;
    }
    if (!imageUrl.trim()) {
      setErrorMsg('Please select or provide an image');
      return;
    }

    const featureList = featuresInput
      .split(',')
      .map((f) => f.trim())
      .filter(Boolean);

    const newProject: Property = {
      id: `custom-proj-${Date.now()}`,
      title: title.trim(),
      category,
      location: location.trim() || 'Islamabad, Pakistan',
      tag: tag.trim() || 'New Project Showcase',
      description: description.trim(),
      imageUrl: imageUrl.trim(),
      features: featureList.length > 0 ? featureList : ['Islamabad Real Estate', 'High Standard Specs'],
      specs: {
        type: projectType.trim() || 'Custom Real Estate Project',
        sector: sector.trim() || 'Islamabad Zone',
        consultationStatus: consultationStatus.trim() || 'Contact for Details',
      },
    };

    onAddProject(newProject);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0B1F33] text-white px-6 py-5 flex items-center justify-between border-b border-[#C9A227]/30 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-[#C9A227]/20 border border-[#C9A227] flex items-center justify-center text-[#C9A227]">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-white">
                Add New Project Listing
              </h3>
              <p className="text-xs text-gray-300">
                Nexus Estate Services &amp; Builder project catalog
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Content */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-md">
              {errorMsg}
            </div>
          )}

          {/* Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                Project Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Margalla Crest Luxury Villa"
                className="w-full px-3.5 py-2.5 text-sm rounded border border-gray-300 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as 'Residential' | 'Commercial' | 'Builder')}
                className="w-full px-3.5 py-2.5 text-sm rounded border border-gray-300 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] outline-none bg-white"
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Builder">Builder &amp; Development</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                Islamabad Location *
              </label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Islamabad (Margalla Enclave / Jinnah Ave)"
                className="w-full px-3.5 py-2.5 text-sm rounded border border-gray-300 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                Tag / Badge Label
              </label>
              <input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="e.g. Featured Project, New Launch, Prime Spot"
                className="w-full px-3.5 py-2.5 text-sm rounded border border-gray-300 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] outline-none"
              />
            </div>
          </div>

          {/* Image Selection Tabs */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Project Cover Image *
            </label>

            <div className="flex items-center gap-2 mb-3 border-b border-gray-200 pb-2 text-xs">
              <button
                type="button"
                onClick={() => setImageTab('presets')}
                className={`px-3 py-1.5 rounded font-medium transition-colors ${
                  imageTab === 'presets'
                    ? 'bg-[#0B1F33] text-[#C9A227]'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Preset Architecture
              </button>
              <button
                type="button"
                onClick={() => setImageTab('url')}
                className={`px-3 py-1.5 rounded font-medium transition-colors ${
                  imageTab === 'url'
                    ? 'bg-[#0B1F33] text-[#C9A227]'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Custom URL
              </button>
              <button
                type="button"
                onClick={() => setImageTab('upload')}
                className={`px-3 py-1.5 rounded font-medium transition-colors ${
                  imageTab === 'upload'
                    ? 'bg-[#0B1F33] text-[#C9A227]'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Upload File
              </button>
            </div>

            {imageTab === 'presets' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PRESET_IMAGES.map((preset) => (
                  <div
                    key={preset.url}
                    onClick={() => setImageUrl(preset.url)}
                    className={`relative rounded-lg overflow-hidden border-2 cursor-pointer group transition-all ${
                      imageUrl === preset.url
                        ? 'border-[#C9A227] ring-2 ring-[#C9A227]/30 scale-[1.02]'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={preset.url}
                      alt={preset.label}
                      className="w-full h-20 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-1.5">
                      <span className="text-[10px] text-white font-medium truncate">
                        {preset.label}
                      </span>
                    </div>
                    {imageUrl === preset.url && (
                      <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-[#C9A227] text-[#0B1F33] flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {imageTab === 'url' && (
              <div className="space-y-2">
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3.5 py-2.5 text-sm rounded border border-gray-300 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] outline-none"
                />
                <p className="text-[11px] text-gray-500">
                  Provide a direct HTTPS link to high-resolution real estate photography.
                </p>
              </div>
            )}

            {imageTab === 'upload' && (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#C9A227] transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <label className="cursor-pointer text-xs font-semibold text-[#0B1F33] bg-[#C9A227] hover:bg-[#D4AF37] px-4 py-2 rounded inline-block transition-colors shadow-sm">
                  Select Project Photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                <p className="text-[11px] text-gray-500 mt-2">
                  JPG, PNG, or WebP up to 5MB
                </p>
              </div>
            )}

            {/* Selected image preview */}
            {imageUrl && (
              <div className="mt-3 flex items-center gap-3 p-2 bg-gray-50 rounded border border-gray-200">
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="w-16 h-12 rounded object-cover border border-gray-300"
                />
                <div className="text-xs text-gray-600 truncate flex-1">
                  <span className="font-semibold text-gray-900 block">Cover Image Selected</span>
                  <span className="truncate block text-[11px] text-gray-500">{imageUrl}</span>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
              Project Description *
            </label>
            <textarea
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the architectural design, sector positioning, and living or commercial scope..."
              className="w-full px-3.5 py-2.5 text-sm rounded border border-gray-300 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] outline-none resize-none"
            />
          </div>

          {/* Features */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
              Key Features (comma-separated)
            </label>
            <input
              type="text"
              value={featuresInput}
              onChange={(e) => setFeaturesInput(e.target.value)}
              placeholder="e.g. Scenic Margalla Views, Dedicated Parking, Double Glazed Windows"
              className="w-full px-3.5 py-2.5 text-sm rounded border border-gray-300 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] outline-none"
            />
          </div>

          {/* Detailed Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded bg-[#F7F5F0] border border-gray-200">
            <div>
              <label className="block text-[11px] font-semibold text-gray-600 uppercase mb-1">
                Property Class
              </label>
              <input
                type="text"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                placeholder="e.g. Modern Villa Architecture"
                className="w-full px-2.5 py-1.5 text-xs rounded border border-gray-300 bg-white"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-gray-600 uppercase mb-1">
                Sector / Area
              </label>
              <input
                type="text"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                placeholder="e.g. Margalla Enclave DHA Site"
                className="w-full px-2.5 py-1.5 text-xs rounded border border-gray-300 bg-white"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-gray-600 uppercase mb-1">
                Status Label
              </label>
              <input
                type="text"
                value={consultationStatus}
                onChange={(e) => setConsultationStatus(e.target.value)}
                placeholder="e.g. Available for Consultation"
                className="w-full px-2.5 py-1.5 text-xs rounded border border-gray-300 bg-white"
              />
            </div>
          </div>
        </form>

        {/* Modal Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-end gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 border border-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-sm bg-[#C9A227] hover:bg-[#D4AF37] text-[#0B1F33] font-bold text-xs uppercase tracking-wider transition-colors shadow"
          >
            <Plus className="w-4 h-4" />
            <span>Create Project Listing</span>
          </button>
        </div>
      </div>
    </div>
  );
};
