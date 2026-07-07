# Sprint 3 - React Context API

## 🎯 Sprint Objective

Learn how React Context API solves the Prop Drilling problem by creating a shared state that multiple components can access directly without passing props through intermediate components.

---

# 📚 Topics Learned

- React Context API
- createContext()
- Context Provider
- Provider value
- useContext()
- Shared State
- Parent → Child Communication
- Prop Drilling
- Context Architecture
- Global State (within a Provider)

---

# 🧠 Problem Statement

In Sprint 2, application data was stored inside `App.jsx`.

The data had to travel through multiple components before reaching the actual component that required it.

Example:

App
↓
Dashboard
↓
WalletSection
↓
WalletCard

Even though Dashboard and WalletSection did not use the data, they were forced to receive and forward it.

This problem is called **Prop Drilling**.

---

# 💡 Solution

React Context API introduces a shared container that stores data.

Instead of passing data through every intermediate component,

Components directly access the required data using `useContext()`.

New Architecture:

WalletProvider
↓
WalletCard

WalletProvider
↓
ActionButtons

WalletProvider
↓
RecentAction

---

# 🏗️ Project

## Project Name

Paytm Wallet - Context API Version

---

# 📂 Project Structure

```text
src
│
├── context
│   └── WalletContext.jsx
│
├── components
│   ├── Header
│   ├── Footer
│   └── Dashboard
│       ├── WalletSection
│       ├── ActionSection
│       └── ActivitySection
│
├── App.jsx
└── main.jsx
```

---

# 🚀 Features Implemented

- Display Wallet Balance
- Add ₹500
- Spend ₹200
- Reset Wallet
- Display Recent Action
- Shared State using Context API
- Removed Prop Drilling

---

# ⚙️ Concepts Implemented

## createContext()

Creates a Context object.

It creates an empty shared container.

Example:

```jsx
const WalletContext = createContext();
```

---

## WalletProvider

Owns the application's shared state.

Stores:

- walletBalance
- setWalletBalance
- recentAction
- setRecentAction

---

## Provider

Shares the state with every component inside it.

Example:

```jsx
<WalletContext.Provider value={...}>
    {children}
</WalletContext.Provider>
```

---

## useContext()

Allows any child component to access the shared state directly.

Example:

```jsx
const { walletBalance } = useContext(WalletContext);
```

---

# 🔄 Before Context API

```text
App
│
▼
Dashboard
│
▼
WalletSection
│
▼
WalletCard
```

Props were passed through every level.

---

# ✅ After Context API

```text
WalletProvider
│
▼
WalletCard
```

Components directly access the required data.

No Prop Drilling.

---

# 🔍 Files Modified

- main.jsx
- App.jsx
- WalletContext.jsx
- WalletCard.jsx
- WalletSection.jsx
- ActionButtons.jsx
- ActionSection.jsx
- RecentAction.jsx
- ActivitySection.jsx
- Dashboard.jsx

---

# 🎓 Key Learnings

- State should have a single source of truth.
- Props are suitable for Parent → Child communication.
- Prop Drilling makes applications harder to maintain.
- Context API removes unnecessary intermediate prop passing.
- Provider shares state.
- useContext reads shared state.
- Multiple components can consume the same state.

---

# 📈 Comparison

| Sprint | State Management |
|----------|------------------|
| Sprint 1 | useState |
| Sprint 2 | useState + Props |
| Sprint 3 | useState + Context API |

---

# 📖 Real-Life Analogy

Without Context API

CEO
↓
Manager
↓
Team Lead
↓
Employee

Every person forwards the same document.

---

With Context API

Notice Board
↓
Anyone who needs the document reads it directly.

No intermediaries.

---

# 🏁 Sprint Outcome

Successfully replaced Prop Drilling with React Context API.

Application now uses:

- createContext()
- Provider
- useContext()

for centralized shared state management.

---

# ✅ Sprint Status

COMPLETED