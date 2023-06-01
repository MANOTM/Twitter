function formatTimeAgo(timeString) {
    if (timeString.includes('a few seconds ago')) {
      return 'Now';
    }
    
    if (timeString.includes('a minute ago')) {
      return '1m';
    }
    
    const extractNumber = (str) => parseInt(str);
    
    if (timeString.includes('minutes ago')) {
      const minutesAgo = extractNumber(timeString);
      if (!isNaN(minutesAgo)) {
        return `${minutesAgo}m`;
      }
    } else if (timeString.includes('an hour ago')) {
      return '1h';
    } else if (timeString.includes('hours ago')) {
      const hoursAgo = extractNumber(timeString);
      if (!isNaN(hoursAgo)) {
        return `${hoursAgo}h`;
      }
    } else if (timeString.includes('a day ago') || timeString.includes('days')) {
      const daysAgo = extractNumber(timeString);
      if (!isNaN(daysAgo)) {
        if (daysAgo === 1) {
          return 'Yesterday';
        } else if (daysAgo >= 2) {
          const date = new Date();
          date.setDate(date.getDate() - daysAgo);
          const month = date.toLocaleString('default', { month: 'short' });
          const day = date.getDate();
          return `${month} ${day}`;
        }
      }
    }
    
    return timeString;
  }

export default formatTimeAgo