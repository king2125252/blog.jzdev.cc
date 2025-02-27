import { motion } from 'framer-motion'
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}  // 初始狀態：透明且向左偏移 50px
      animate={{ opacity: 1, y: 0 }}      // 進入狀態：完全顯示且回到原位
      exit={{ opacity: 0, y: 50 }}        // 離開狀態：透明且向右偏移 50px
      transition={{ duration: 0.5 }}       // 動畫持續 0.5 秒 
      className="bg-red-500">
      <h1>Home</h1>
    </motion.div>
  );
}
export default Home