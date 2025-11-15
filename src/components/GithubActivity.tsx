import React  from 'react';
import { Github, GitCommit, GitPullRequest, Star, TrendingUp } from 'lucide-react';
import { usePortfolio } from '../context/portfolioContext';

// interface GitHubStats {
//   totalCommits: number;
//   totalPRs: number;
//   totalStars: number;
//   totalRepos: number;
// }

const GitHubActivity: React.FC = () => {
  const { data } = usePortfolio();
//   const [stats, setStats] = useState<GitHubStats>({
//     totalCommits: 0,
//     totalPRs: 0,
//     totalStars: 0,
//     totalRepos: 0
//   });

  // Find GitHub username from social links
  const githubLink = data.socialLinks.find(link => link.platform.toLowerCase() === 'github');
  const githubUsername = githubLink?.url.split('github.com/')[1]?.replace('/', '') || 'yourusername';

  // Sample contribution data (you can replace with real API data)
  const generateContributionData = () => {
    const weeks = 52;
    const data = [];
    for (let week = 0; week < weeks; week++) {
      const weekData = [];
      for (let day = 0; day < 7; day++) {
        weekData.push({
          date: new Date(Date.now() - (weeks - week) * 7 * 24 * 60 * 60 * 1000 + day * 24 * 60 * 60 * 1000),
          count: Math.floor(Math.random() * 15)
        });
      }
      data.push(weekData);
    }
    return data;
  };

  const contributionData = generateContributionData();

  // Get color intensity based on contribution count
  const getColorIntensity = (count: number) => {
    if (count === 0) return 'bg-bg-tertiary border-border';
    if (count <= 3) return 'bg-primary-900/40 border-primary-800/50';
    if (count <= 6) return 'bg-primary-700/50 border-primary-600/60';
    if (count <= 9) return 'bg-primary-600/60 border-primary-500/70';
    return 'bg-primary-500/80 border-primary-400/80';
  };

  const statsCards = [
    {
      icon: <GitCommit className="w-5 h-5" />,
      label: 'Total Commits',
      value: '1,247',
      color: 'text-primary-400'
    },
    {
      icon: <GitPullRequest className="w-5 h-5" />,
      label: 'Pull Requests',
      value: '156',
      color: 'text-primary-400'
    },
    {
      icon: <Star className="w-5 h-5" />,
      label: 'Stars Earned',
      value: '342',
      color: 'text-primary-400'
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      label: 'Repositories',
      value: '89',
      color: 'text-primary-400'
    }
  ];

  return (
    <section id="github-activity" className="section-container">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="space-y-2 mb-8">
          <div className="flex items-center gap-3">
            <Github className="w-8 h-8 text-primary-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              GitHub Activity
            </h2>
          </div>
          <p className="text-text-secondary">
            My open source contributions and coding activity
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {statsCards.map((stat, index) => (
            <div
              key={stat.label}
              className="card p-4 sm:p-5 space-y-2 hover:scale-105 transition-transform duration-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${stat.color}`}>
                {stat.icon}
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-text-primary">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-text-muted">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contribution Graph */}
        <div className="card p-4 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <h3 className="text-lg font-semibold text-text-primary">
              Contribution Activity
            </h3>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-bg-tertiary border border-border rounded-sm"></div>
                <div className="w-3 h-3 bg-primary-900/40 border border-primary-800/50 rounded-sm"></div>
                <div className="w-3 h-3 bg-primary-700/50 border border-primary-600/60 rounded-sm"></div>
                <div className="w-3 h-3 bg-primary-600/60 border border-primary-500/70 rounded-sm"></div>
                <div className="w-3 h-3 bg-primary-500/80 border border-primary-400/80 rounded-sm"></div>
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Contribution Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="inline-flex gap-1 min-w-max">
              {contributionData.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm border transition-all duration-200 hover:scale-125 hover:ring-2 hover:ring-primary-400/50 cursor-pointer ${getColorIntensity(day.count)}`}
                      title={`${day.count} contributions on ${day.date.toLocaleDateString()}`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Profile Link */}
          <div className="pt-4 border-t border-border">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary-400 transition-colors group"
            >
              <Github className="w-4 h-4" />
              <span>View full profile on GitHub</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* GitHub Streak Card (Optional - Using GitHub Readme Stats) */}
        {/* <div className="mt-6 card p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            GitHub Stats
          </h3>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&bg_color=181a1b&title_color=3b82f6&text_color=9aa3b2&icon_color=3b82f6&border_color=232426&hide_border=false`}
              alt="GitHub Stats"
              className="w-full max-w-md rounded-lg"
            />
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=dark&background=181a1b&ring=3b82f6&fire=3b82f6&currStreakLabel=3b82f6&border=232426`}
              alt="GitHub Streak"
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default GitHubActivity;