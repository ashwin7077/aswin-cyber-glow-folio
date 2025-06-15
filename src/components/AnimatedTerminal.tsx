
import { useState, useEffect } from 'react';
import { Terminal, ChevronRight } from 'lucide-react';

interface TerminalCommand {
  command: string;
  output: string;
  delay: number;
}

export const AnimatedTerminal = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const commands: TerminalCommand[] = [
    { command: "whoami", output: "aswin@cybersec:~$ Cybersecurity Specialist", delay: 50 },
    { command: "ls skills/", output: "penetration-testing  digital-forensics  malware-analysis", delay: 30 },
    { command: "cat certifications.txt", output: "OSCP [In Progress] | CEH [Planned] | Security+ [Complete]", delay: 40 },
    { command: "grep -r vulnerabilities ./projects/", output: "127 CTF challenges solved | 15+ tools developed", delay: 35 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentLine < commands.length) {
        const currentCommand = commands[currentLine];
        const fullText = `$ ${currentCommand.command}\n${currentCommand.output}`;
        
        if (currentChar < fullText.length) {
          setCurrentChar(prev => prev + 1);
        } else {
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
            setCurrentChar(0);
          }, 1500);
        }
      }
    }, 80);

    return () => clearInterval(timer);
  }, [currentLine, currentChar]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  const renderLines = () => {
    const lines = [];
    for (let i = 0; i <= currentLine && i < commands.length; i++) {
      const command = commands[i];
      const fullText = `$ ${command.command}\n${command.output}`;
      
      if (i === currentLine) {
        const visibleText = fullText.slice(0, currentChar);
        lines.push(
          <div key={i} className="font-mono text-sm">
            {visibleText.split('\n').map((line, idx) => (
              <div key={idx} className={idx === 0 ? "text-green-400" : "text-gray-300"}>
                {line}
                {idx === visibleText.split('\n').length - 1 && showCursor && (
                  <span className="bg-green-400 text-gray-900 ml-1">_</span>
                )}
              </div>
            ))}
          </div>
        );
      } else if (i < currentLine) {
        lines.push(
          <div key={i} className="font-mono text-sm">
            {fullText.split('\n').map((line, idx) => (
              <div key={idx} className={idx === 0 ? "text-green-400" : "text-gray-300"}>
                {line}
              </div>
            ))}
          </div>
        );
      }
    }
    return lines;
  };

  return (
    <div className="cyber-border bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
      <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-gray-700">
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <Terminal className="w-4 h-4 text-green-400" />
        <span className="text-gray-400 text-sm font-mono">terminal</span>
      </div>
      <div className="space-y-2 min-h-[200px]">
        {renderLines()}
        {currentLine >= commands.length && (
          <div className="flex items-center text-green-400 font-mono text-sm">
            <ChevronRight className="w-4 h-4 mr-1" />
            <span>Ready for next command{showCursor ? '_' : ''}</span>
          </div>
        )}
      </div>
    </div>
  );
};
