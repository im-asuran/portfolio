/**
 * Skill-level helpers.
 * Maps a proficiency label to a percentage width for progress bars.
 */

const LEVEL_MAP = {
  Advanced: 90,
  Intermediate: 65,
  Beginner: 35,
};

/**
 * Convert a proficiency level string to a CSS-ready percentage.
 * @param {string} level - "Advanced" | "Intermediate" | "Beginner"
 * @returns {string} e.g. "90%"
 */
export function levelToPercent(level) {
  return `${LEVEL_MAP[level] ?? 50}%`;
}
