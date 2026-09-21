import React from 'react';
import { AlertTriangle, Trash2, X } from 'lucide-react';
import { Property } from '../types';

interface DeleteConfirmModalProps {
  project: Property | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirmDelete: (projectId: string) => void;
}

export const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  project,
  isOpen,
  onClose,
  onConfirmDelete,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 rounded-full transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4 border border-red-200">
            <AlertTriangle className="w-6 h-6" />
          </div>

          <h3 className="font-serif-luxury text-xl font-bold text-[#0B1F33] mb-2">
            Delete Project Listing?
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
            Are you sure you want to delete this listing? It will be removed from the featured properties showcase.
          </p>

          {/* Project preview snippet */}
          <div className="flex items-center gap-3 p-3 bg-[#F7F5F0] rounded-lg border border-gray-200 mb-6">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-16 h-12 rounded object-cover border border-gray-300 shrink-0"
            />
            <div className="overflow-hidden">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227] block">
                {project.category}
              </span>
              <div className="text-xs font-semibold text-[#0B1F33] truncate">
                {project.title}
              </div>
              <div className="text-[11px] text-gray-500 truncate">
                {project.location}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 border border-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => onConfirmDelete(project.id)}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded transition-colors shadow-sm"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Delete Project</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
