const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.APP_KEY;

// Middleware para proteger rotas que exigem autenticação

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "Acesso negado: nenhum token" });
  }

  jwt.verify(token, JWT_SECRET, (error, user) => {
    if (error) return res.status(403).json({message: "Acesso negado: não autorizado"});
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
