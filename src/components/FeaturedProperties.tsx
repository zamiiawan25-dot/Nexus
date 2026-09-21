import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  ArrowRight,
  Eye,
  Info,
  X,
  Phone,
  Building,
  Plus,
  Trash2,
  RotateCcw,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { FEATURED_PROPERTIES, BUSINESS_INFO } from '../data/siteData';
import { Property } from '../types';
import { AddProjectModal } from './AddProjectModal';
import { DeleteConfirmModal } from './DeleteConfirmModal';

interface FeaturedPropertiesProps {
  onSelectPropertyForInquiry?: (propertyTitle: string) => void;
}

const LOCAL_STORAGE_KEY = 'nexus_featured_projects_v1';

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  onSelectPropertyForInquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Residential' | 'Commercial' | 'Builder'>('All');
  const [activeModalProperty, setActiveModalProperty] = useState<Property | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<Property | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize projects from localStorage or default showcase data
  const [projects, setProjects] = useState<Property[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load projects from localStorage', e);
    }
    return FEATURED_PROPERTIES;
  });

  const categories = ['All', 'Residential', 'Commercial', 'Builder'] as const;

  const filteredProperties = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const isModifiedFromDefault =
    projects.length !== FEATURED_PROPERTIES.length ||
    projects.some((p, i) => !FEATURED_PROPERTIES[i] || p.id !== FEATURED_PROPERTIES[i].id);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const saveProjects = (updatedProjects: Property[]) => {
    setProjects(updatedProjects);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedProjects));
    } catch (e) {
      console.error('Failed to save projects to localStorage', e);
    }
  };

  const handleAddProject = (newProject: Property) => {
    const updated = [newProject, ...projects];
    saveProjects(updated);
    if (selectedCategory !== 'All' && selectedCategory !== newProject.category) {
      setSelectedCategory(newProject.category);
    }
    showToast(`"${newProject.title}" has been added to project listings.`);
  };

  const handleConfirmDelete = (projectId: string) => {
    const target = projects.find((p) => p.id === projectId);
    const updated = projects.filter((p) => p.id !== projectId);
    saveProjects(updated);
    setProjectToDelete(null);
    if (activeModalProperty?.id === projectId) {
      setActiveModalProperty(null);
    }
    showToast(`"${target?.title || 'Project'}" has been deleted.`);
  };

  const handleResetDefaults = () => {
    saveProjects(FEATURED_PROPERTIES);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
    setSelectedCategory('All');
    showToast('Showcase projects restored to initial Islamabad catalog.');
  };

  const handleInquireProperty = (propertyTitle: string) => {
    if (onSelectPropertyForInquiry) {
      onSelectPropertyForInquiry(`Inquiry regarding: ${propertyTitle}`);
    }
    setActiveModalProperty(null);
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="properties" className="py-20 lg:py-28 bg-[#F7F5F0] relative">
      {/* Dynamic Toast Feedback Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed top-24 left-1/2 z-50 flex items-center gap-2 px-4 py-3 rounded-lg bg-[#0B1F33] text-white border border-[#C9A227] shadow-xl text-xs sm:text-sm font-medium"
          >
            <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-[#C9A227]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Curated Architecture &amp; Projects
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F33] leading-tight">
              Featured Properties &amp; Projects
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-xl font-normal">
              Explore our residential, commercial, and builder development catalog in Islamabad. You can add new projects or manage listings directly.
            </p>
          </div>

          {/* Action Header Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#C9A227] hover:bg-[#D4AF37] text-[#0B1F33] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg active:translate-y-0.5"
              id="add-new-project-btn"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Project</span>
            </button>

            {isModifiedFromDefault && (
              <button
                type="button"
                onClick={handleResetDefaults}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-sm bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 text-xs font-semibold uppercase tracking-wider transition-colors"
                title="Reset to default Islamabad showcase listings"
              >
                <RotateCcw className="w-3.5 h-3.5 text-gray-500" />
                <span>Reset Defaults</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs & Counter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-200">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {categories.map((cat) => {
              const count = cat === 'All'
                ? projects.length
                : projects.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                    selectedCategory === cat
                      ? 'bg-[#0B1F33] text-[#C9A227] shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span>{cat === 'All' ? 'All Listings' : `${cat}`}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      selectedCategory === cat
                        ? 'bg-[#C9A227] text-[#0B1F33] font-bold'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs text-gray-500 flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
            <span>Showing {filteredProperties.length} of {projects.length} total projects</span>
          </div>
        </div>

        {/* Property Grid */}
        {filteredProperties.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-xl border border-dashed border-gray-300 max-w-xl mx-auto my-8">
            <div className="w-14 h-14 rounded-full bg-[#0B1F33]/5 text-[#C9A227] flex items-center justify-center mx-auto mb-4 border border-[#C9A227]/30">
              <Building className="w-7 h-7" />
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-[#0B1F33] mb-2">
              No Projects Found
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
              There are currently no listings in the &quot;{selectedCategory}&quot; category. You can add a new project or restore the initial Islamabad showcase properties.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(true)}
                className="px-5 py-2.5 rounded-sm bg-[#C9A227] text-[#0B1F33] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-colors"
              >
                + Add Project
              </button>
              <button
                type="button"
                onClick={handleResetDefaults}
                className="px-4 py-2.5 rounded-sm bg-gray-100 text-gray-700 text-xs font-semibold uppercase tracking-wider hover:bg-gray-200 transition-colors"
              >
                Restore Default Listings
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProperties.map((prop) => (
                <motion.div
                  key={prop.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-lg overflow-hidden border border-gray-200/80 hover:border-[#C9A227]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative"
                >
                  {/* Property Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={prop.imageUrl}
                      alt={prop.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Top Badges & Delete Button */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="px-2.5 py-1 rounded bg-[#0B1F33]/90 text-white text-[11px] font-semibold tracking-wider uppercase backdrop-blur-sm border border-white/15">
                          {prop.category}
                        </span>
                        <span className="px-2.5 py-1 rounded bg-[#C9A227] text-[#0B1F33] text-[11px] font-bold tracking-wider uppercase shadow">
                          {prop.tag || 'Project'}
                        </span>
                      </div>

                      {/* Delete Quick Trigger */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setProjectToDelete(prop);
                        }}
                        className="w-8 h-8 rounded-full bg-black/60 hover:bg-red-600 text-white flex items-center justify-center backdrop-blur-md transition-colors shadow"
                        title="Delete project listing"
                        aria-label={`Delete project ${prop.title}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Bottom Image Overlay Location Tag */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center gap-1.5 text-white text-xs">
                      <MapPin className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                      <span className="font-medium truncate">{prop.location}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-semibold text-[#C9A227] uppercase tracking-wider mb-1">
                        {prop.specs?.type || prop.category}
                      </div>

                      <h3 className="font-serif-luxury text-xl font-bold text-[#0B1F33] mb-2 group-hover:text-[#B2881E] transition-colors line-clamp-1">
                        {prop.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4 font-normal">
                        {prop.description}
                      </p>

                      {/* Features Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {prop.features?.slice(0, 3).map((feat) => (
                          <span
                            key={feat}
                            className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-[10px] font-medium border border-gray-200"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide truncate max-w-[130px]">
                        {prop.specs?.consultationStatus || 'Contact for Details'}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setProjectToDelete(prop)}
                          className="p-1.5 text-gray-400 hover:text-red-600 transition-colors rounded hover:bg-red-50"
                          title="Delete listing"
                          aria-label={`Delete ${prop.title}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => setActiveModalProperty(prop)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#0B1F33] text-white hover:bg-[#C9A227] hover:text-[#0B1F33] text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Add Project Modal */}
      <AddProjectModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddProject={handleAddProject}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        project={projectToDelete}
        isOpen={Boolean(projectToDelete)}
        onClose={() => setProjectToDelete(null)}
        onConfirmDelete={handleConfirmDelete}
      />

      {/* Property Details Modal */}
      {activeModalProperty && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalProperty(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-72 bg-gray-900 shrink-0">
              <img
                src={activeModalProperty.imageUrl}
                alt={activeModalProperty.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const prop = activeModalProperty;
                    setActiveModalProperty(null);
                    setProjectToDelete(prop);
                  }}
                  className="p-2 bg-black/60 hover:bg-red-600 text-white rounded-full transition-colors"
                  title="Delete this project"
                  aria-label="Delete this project"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModalProperty(null)}
                  className="p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors"
                  aria-label="Close details modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded bg-[#C9A227] text-[#0B1F33] text-[10px] font-bold uppercase tracking-wider mb-2">
                  {activeModalProperty.category} Showcase
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold">
                  {activeModalProperty.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-300 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>{activeModalProperty.location}</span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Project Overview
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {activeModalProperty.description}
                </p>
              </div>

              {/* Specifications Card */}
              <div className="p-4 rounded bg-[#F7F5F0] border border-[#C9A227]/30 text-xs">
                <div className="font-bold text-[#0B1F33] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-[#C9A227]" />
                  <span>Listing Specifications &amp; Inquiries</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600">
                  <div>
                    <span className="text-gray-500">Property Class:</span>{' '}
                    <strong className="text-gray-900">{activeModalProperty.specs?.type || 'Standard'}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500">Location Area:</span>{' '}
                    <strong className="text-gray-900">{activeModalProperty.specs?.sector || activeModalProperty.location}</strong>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-gray-500">Status:</span>{' '}
                    <span className="inline-block font-semibold text-[#0B1F33] bg-[#C9A227]/20 px-2 py-0.5 rounded">
                      {activeModalProperty.specs?.consultationStatus || 'Contact for Details'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Highlight Features */}
              {activeModalProperty.features && activeModalProperty.features.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Architectural &amp; Location Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalProperty.features.map((feature) => (
                      <div
                        key={feature}
                        className="px-3 py-2 rounded bg-gray-50 text-xs font-medium text-gray-700 border border-gray-200"
                      >
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <div className="w-full sm:w-auto flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalProperty(null)}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-900"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => handleInquireProperty(activeModalProperty.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-sm bg-[#C9A227] text-[#0B1F33] hover:bg-[#D4AF37] text-xs font-bold uppercase tracking-wider transition-colors shadow"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
