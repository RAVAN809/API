// BHAAYANAK REFERRAL SYSTEM - VIRAL VERSION
class ViralReferralBeast {
    constructor() {
        this.apiEndpoint = 'https://examsaathi.com/api/v1/nuclear/referral'; // Change to your actual API
        this.userData = null;
        this.attackMode = true;
        this.invasionCount = 0;
    }

    // NUCLEAR INITIALIZATION
    async activateVirus() {
        try {
            console.log('🚀 NUCLEAR LAUNCH DETECTED!');
            
            // Hide loading screen
            this.hideLoading();
            
            // For demo - using mock data. Replace with actual API call
            const nuclearData = await this.getMockData();
            this.userData = nuclearData.data;
            this.deployInvasionInterface();
            this.startPsychologicalWarfare();
            
            console.log('✅ VIRUS DEPLOYED SUCCESSFULLY!');
            return true;

        } catch (error) {
            console.error('💀 SYSTEM FAILURE:', error);
            this.initiateSelfDestruct();
            return false;
        }
    }

    // MOCK DATA - REPLACE WITH ACTUAL API
    async getMockData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    data: {
                        userId: 'USER_' + Math.random().toString(36).substr(2, 9),
                        referralCode: 'VISHAL' + Math.floor(Math.random() * 1000),
                        totalReferrals: Math.floor(Math.random() * 50) + 5,
                        earnings: Math.floor(Math.random() * 5000) + 500,
                        pendingRewards: Math.floor(Math.random() * 10) + 1,
                        rewards: [
                            { name: "FIRST BLOOD", amount: "₹200", condition: "1st Referral" },
                            { name: "DOUBLE KILL", amount: "₹500", condition: "5 Referrals" },
                            { name: "KILLING SPREE", amount: "₹1200", condition: "10 Referrals" },
                            { name: "DOMINATING", amount: "₹2500", condition: "25 Referrals" },
                            { name: "GODLIKE", amount: "₹5000", condition: "50 Referrals" },
                            { name: "LEGENDARY", amount: "₹10000", condition: "100 Referrals" }
                        ]
                    }
                });
            }, 2000);
        });
    }

    hideLoading() {
        const loading = document.getElementById('loading');
        const app = document.getElementById('app');
        if (loading) loading.style.display = 'none';
        if (app) app.style.display = 'block';
    }

    // PSYCHOLOGICAL WARFARE MODULE
    startPsychologicalWarfare() {
        // FOMO CREATE KARNE WALA ALGORITHM
        setInterval(() => {
            this.showKillerNotification();
        }, 45000); // 45 seconds

        // AGGRESSIVE REMINDERS
        this.deployTacticalNudges();
    }

    // KILLER NOTIFICATIONS
    showKillerNotification() {
        const messages = [
            `🔥 ${Math.floor(Math.random() * 50) + 10} LOG NE ABHI JOIN KIYA!`,
            `💸 ₹${Math.floor(Math.random() * 2000) + 500} TAK KA EARNING MISSED!`,
            `🚨 AAPKE ${Math.floor(Math.random() * 20) + 5} DOST WAIT KAR RAHE HAIN!`,
            `⚡ LIMITED TIME! DOUBLE REWARDS ACTIVATED!`,
            `🎯 TOP REFERRER BANNE KA MAUKA! ACT NOW!`,
            `💥 ${Math.floor(Math.random() * 100) + 20} USERS ONLINE - COMPETITION TOUGH!`
        ];
        
        this.createFloatingNuke(messages[Math.floor(Math.random() * messages.length)]);
    }

    // FLOATING NUKE NOTIFICATIONS
    createFloatingNuke(message) {
        const nuke = document.createElement('div');
        nuke.className = 'viral-nuke-notification';
        nuke.innerHTML = `
            <span class="nuke-icon">💣</span>
            <span class="nuke-text">${message}</span>
            <button class="nuke-close" onclick="this.parentElement.remove()">×</button>
        `;
        
        document.body.appendChild(nuke);
        setTimeout(() => {
            if (nuke.parentElement) {
                nuke.remove();
            }
        }, 5000);
    }

    // TACTICAL INVASION INTERFACE
    deployInvasionInterface() {
        const invasionPoint = document.getElementById('app');
        if (invasionPoint) {
            invasionPoint.innerHTML = this.generateWeaponizedHTML();
            this.attachNuclearEventListeners();
            this.startCountdownTimer();
        }
    }

    // WEAPONIZED HTML GENERATOR
    generateWeaponizedHTML() {
        if (!this.userData) return '<div>Data loading failed</div>';

        return `
            <div class="nuclear-referral-container">
                <div class="war-header">
                    <div class="title-section">
                        <h2>💥 REFERRAL NUCLEAR WEAPON ACTIVATED</h2>
                        <div class="countdown-timer" id="countdown">24:00:00</div>
                    </div>
                    <div class="stats-overview">
                        <div class="stat-item">
                            <span class="stat-number">${this.userData.totalReferrals}</span>
                            <span class="stat-label">TOTAL VICTIMS</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">₹${this.userData.earnings}</span>
                            <span class="stat-label">LOOT COLLECTED</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${this.userData.pendingRewards}</span>
                            <span class="stat-label">PENDING ATTACKS</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">#${Math.floor(Math.random() * 50) + 1}</span>
                            <span class="stat-label">YOUR RANK</span>
                        </div>
                    </div>
                </div>

                <div class="nuclear-control-panel">
                    <div class="weapon-section">
                        <h3>🎯 YOUR SECRET WEAPON</h3>
                        <div class="referral-code-nuke">
                            <input type="text" value="${this.userData.referralCode}" readonly id="nukeCode">
                            <button class="copy-nuke" onclick="copyNuclearCode()">💣 COPY WEAPON CODE</button>
                        </div>
                        <p style="opacity: 0.8; margin-top: 10px; font-size: 0.9rem;">
                            Ye code apne dosto ko do aur har referral pe paise kamayo!
                        </p>
                    </div>

                    <div class="invasion-links">
                        <h3>🌐 MULTI-PLATFORM INVASION</h3>
                        <div class="invasion-buttons">
                            <button class="invasion-btn whatsapp-nuke" onclick="launchWhatsAppNuke()">
                                💚 WhatsApp Nuclear Attack
                            </button>
                            <button class="invasion-btn telegram-nuke" onclick="launchTelegramNuke()">
                                💙 Telegram Blitzkrieg
                            </button>
                            <button class="invasion-btn instagram-nuke" onclick="launchInstagramNuke()">
                                💖 Instagram Tsunami
                            </button>
                            <button class="invasion-btn sms-nuke" onclick="launchSMSNuke()">
                                📱 SMS Barrage
                            </button>
                        </div>
                    </div>

                    <div class="loot-display">
                        <h3>💰 LOOT BREAKDOWN</h3>
                        <div class="loot-grid">
                            ${this.generateLootItems()}
                        </div>
                    </div>

                    <div class="leaderboard-section">
                        <h3>🏆 ELITE ASSASSINS LEADERBOARD</h3>
                        <div class="assassin-list">
                            ${this.generateKillerLeaderboard()}
                        </div>
                    </div>
                </div>

                <div class="emergency-extract">
                    <button class="emergency-btn" onclick="initiateEmergencyExtract()">
                        🚨 EMERGENCY EXTRACT (HELP)
                    </button>
                </div>
            </div>
        `;
    }

    // LOOT ITEMS GENERATOR
    generateLootItems() {
        const rewards = this.userData.rewards || [];
        return rewards.map(reward => `
            <div class="loot-item">
                <div class="loot-name">${reward.name}</div>
                <div class="loot-amount">${reward.amount}</div>
                <div class="loot-condition">${reward.condition}</div>
            </div>
        `).join('');
    }

    // KILLER LEADERBOARD
    generateKillerLeaderboard() {
        const assassins = [
            { name: "VISHAL", score: "₹15,420", victims: 154 },
            { name: "RAJ", score: "₹12,800", victims: 128 },
            { name: "PRIYA", score: "₹9,650", victims: 96 },
            { name: "AMIT", score: "₹7,200", victims: 72 },
            { name: "YOU", score: `₹${this.userData.earnings}`, victims: this.userData.totalReferrals, highlight: true }
        ];

        return assassins.map((assassin, index) => `
            <div class="assassin-item ${assassin.highlight ? 'highlight' : ''}">
                <span class="rank">#${index + 1}</span>
                <span class="assassin-name">${assassin.name}</span>
                <span class="assassin-score">${assassin.score}</span>
                <span class="victim-count">${assassin.victims} victims</span>
            </div>
        `).join('');
    }

    // NUCLEAR EVENT LISTENERS
    attachNuclearEventListeners() {
        // YEH SAB FUNCTION GLOBAL BANENGE TAKI HTML ONCLICK WORK KARE
        window.copyNuclearCode = () => {
            const codeInput = document.getElementById('nukeCode');
            if (codeInput) {
                codeInput.select();
                codeInput.setSelectionRange(0, 99999);
                navigator.clipboard.writeText(codeInput.value).then(() => {
                    this.createFloatingNuke('💣 NUCLEAR CODE COPIED! LAUNCHING...');
                });
            }
        };

        window.launchWhatsAppNuke = () => {
            const message = `Join ExamSaathi using my referral code: ${this.userData.referralCode}. Get amazing rewards! 🚀\n\nDownload Now: https://examsaathi.com`;
            const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
            this.createFloatingNuke('💚 WhatsApp nuke launched!');
        };

        window.launchTelegramNuke = () => {
            const message = `Join ExamSaathi! Use code: ${this.userData.referralCode} for special benefits. 🎯`;
            const url = `https://t.me/share/url?url=https://examsaathi.com&text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
            this.createFloatingNuke('💙 Telegram blitzkrieg initiated!');
        };

        window.launchInstagramNuke = () => {
            this.createFloatingNuke('📸 Instagram pe share karne ke liye app use karo!');
            // Instagram web doesn't support direct sharing, so show message
        };

        window.launchSMSNuke = () => {
            const message = `Join ExamSaathi with my code ${this.userData.referralCode} for rewards! https://examsaathi.com`;
            const url = `sms:?body=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
            this.createFloatingNuke('📱 SMS barrage deployed!');
        };
    }

    // COUNTDOWN TIMER - FOMO MAXIMUM
    startCountdownTimer() {
        const countdownElement = document.getElementById('countdown');
        if (!countdownElement) return;

        let time = 24 * 60 * 60; // 24 hours
        
        const updateTimer = () => {
            const hours = Math.floor(time / 3600);
            const minutes = Math.floor((time % 3600) / 60);
            const seconds = time % 60;
            
            countdownElement.textContent = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            time--;
            
            if (time <= 0) {
                this.createFloatingNuke('⚠️ MISSION FAILED! REWARDS EXPIRED!');
                time = 24 * 60 * 60; // Reset
            }
        };

        updateTimer(); // Initial call
        setInterval(updateTimer, 1000);
    }

    // TACTICAL NUDGES
    deployTacticalNudges() {
        // Random motivational messages
        setTimeout(() => {
            this.createFloatingNuke('🎯 Pro Tip: WhatsApp pe sabse zyada conversions hote hain!');
        }, 15000);

        setTimeout(() => {
            this.createFloatingNuke('💡 5 referrals complete karo aur ₹500 extra pao!');
        }, 60000);
    }

    // SELF DESTRUCT SEQUENCE
    initiateSelfDestruct() {
        console.log('💀 SELF DESTRUCT INITIATED!');
        const app = document.getElementById('app');
        if (app) {
            app.innerHTML = `
                <div class="self-destruct">
                    <h2>💥 SYSTEM FAILURE</h2>
                    <p>Referral system temporarily unavailable. Please try reloading.</p>
                    <button onclick="location.reload()">🔄 RELOAD WEAPON</button>
                </div>
            `;
        }
    }
}

// GLOBAL FUNCTIONS FOR HTML ONCLICK
window.initiateEmergencyExtract = () => {
    if (confirm('🚨 ARE YOU SURE YOU WANT TO CALL FOR HELP?\n\nWe will open WhatsApp support.')) {
        const message = 'Hello ExamSaathi Support, I need help with the referral system.';
        window.open(`https://wa.me/88888888?text=${encodeURIComponent(message)}`, '_blank');
    }
};

// AUTOMATIC DEPLOYMENT - PAGE LOAD PE HI ATTACK SHURU
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 VIRAL REFERRAL BEAST DEPLOYING...');
    const viralBeast = new ViralReferralBeast();
    viralBeast.activateVirus();
});