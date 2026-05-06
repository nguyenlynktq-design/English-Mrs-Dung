/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Menu, 
  Globe, 
  GraduationCap, 
  Heart, 
  ShieldCheck, 
  ArrowRight, 
  Baby, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Mail,
  Facebook,
  School,
  Sparkles,
  Brain,
  PenTool,
  MicVocal,
  Cpu,
  User,
  Smartphone,
  CheckCircle2,
  Play,
  BookOpen,
  Headphones,
  Music,
  Video,
  Gamepad2,
  Languages,
  Star,
  Zap
} from "lucide-react";

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-surface border-b border-outline-variant w-full sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 h-20 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.postimg.cc/SR9H8vjC/317271424149767020.jpg" 
              alt="English Mrs. Dung Logo" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-sm border border-outline-variant/30"
              referrerPolicy="no-referrer"
            />
            <div className="font-lexend text-xl md:text-2xl font-bold text-primary leading-none">English Mrs. Dung</div>
          </div>
          
          {/* Mobile Menu Icon */}
          <button className="md:hidden text-on-surface-variant hover:text-primary transition-colors">
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            <a className="text-primary border-b-2 border-secondary-container pb-1 font-bold text-sm hover:text-secondary transition-colors cursor-pointer" href="#">Trang chủ</a>
            <a className="text-on-surface-variant hover:text-primary font-bold text-sm transition-colors cursor-pointer" href="#">Khóa học</a>
            <a className="text-on-surface-variant hover:text-primary font-bold text-sm transition-colors cursor-pointer" href="#">Tin tức</a>
            <a className="text-on-surface-variant hover:text-primary font-bold text-sm transition-colors cursor-pointer" href="#">Liên hệ</a>
          </nav>

          <button className="hidden md:flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors">
            Ngôn ngữ <Globe className="w-4 h-4" />
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full min-h-[80vh] md:min-h-[600px] bg-surface-variant overflow-hidden flex flex-col justify-end p-6 md:p-12">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Classroom background" 
              className="w-full h-full object-cover opacity-90" 
              src="https://i.postimg.cc/FHvNXRbq/1727873785610981139-(2).jpg"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col gap-4 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full w-fit">
              <span className="text-sm font-bold">Mrs. Dung</span>
            </div>
            <h1 className="font-lexend text-4xl md:text-6xl text-primary leading-tight font-bold">
              English with Heart.<br />Success with Mrs. Dung
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl">
              Cam kết môi trường học tận tâm – giúp học viên lấy lại sự tự tin và yêu thích tiếng Anh.
            </p>
            <button className="bg-primary text-on-primary text-sm font-bold py-4 px-8 rounded-lg self-start mt-4 shadow-lg hover:bg-primary-container transition-all active:scale-95">
              Nhận tư vấn miễn phí
            </button>
          </motion.div>
        </section>

        {/* Commitment Section */}
        <section className="py-12 md:py-24 px-6 max-w-7xl mx-auto flex flex-col gap-8">
          <motion.div {...fadeInUp} className="flex flex-col gap-2">
            <h2 className="font-lexend text-2xl md:text-3xl text-on-surface font-bold">Cam kết của chúng tôi</h2>
            <div className="h-1.5 w-16 bg-secondary-container rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: GraduationCap, title: "Chất lượng giảng dạy", desc: "Giáo viên tâm huyết, phương pháp hiện đại, tối ưu hóa quá trình tiếp thu." },
              { icon: Heart, title: "Môi trường truyền cảm hứng", desc: "Học tập không áp lực, kích thích sự sáng tạo và yêu thích ngôn ngữ." },
              { icon: ShieldCheck, title: "Đầu ra chuẩn quốc tế", desc: "Lộ trình rõ ràng, cam kết đạt kết quả cao trong các kỳ thi chứng chỉ." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-surface p-6 rounded-2xl shadow-level-1 border border-outline-variant/30 flex gap-4 items-start hover:border-primary/30 transition-colors"
              >
                <div className="bg-primary-container/10 p-3 rounded-xl text-primary shrink-0">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-on-surface">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* About CEO Section */}
        <section className="py-12 md:py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center bg-white rounded-3xl my-12 shadow-level-1 border border-outline-variant/20 overflow-hidden">
          <motion.div 
            {...fadeInUp}
            className="w-full md:w-1/2 aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden relative"
          >
            <img 
              alt="Mrs. Dung - CEO English Mrs. Dung" 
              className="w-full h-full object-cover" 
              src="https://i.postimg.cc/rpbHcZXw/326541317931931054.jpg"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </motion.div>
          
          <motion.div 
            {...fadeInUp}
            className="w-full md:w-1/2 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <span className="text-secondary font-bold text-sm tracking-widest uppercase">Người truyền cảm hứng</span>
              <h2 className="font-lexend text-3xl md:text-4xl text-on-surface font-bold">CEO Mrs. Dung</h2>
              <div className="h-1.5 w-16 bg-secondary-container rounded-full"></div>
            </div>
            
            <div className="flex flex-col gap-4 text-on-surface-variant leading-relaxed">
              <p className="text-lg font-medium text-primary">
                "Học tiếng Anh không chỉ là học một ngôn ngữ, mà là mở ra một thế giới mới."
              </p>
              <p>
                Với <strong>15 năm kinh nghiệm</strong> giảng dạy chuyên sâu các lớp "mất gốc", Mrs. Dung đã đồng hành và giúp hàng trăm học viên lấy lại nền tảng vững chắc về ngữ pháp, từ vựng và phát âm.
              </p>
              <p>
                Phương pháp giảng dạy của cô tập trung vào việc khơi gợi niềm yêu thích, xóa tan rào cản tâm lý sợ sai, giúp học viên tự tin giao tiếp và đạt được nhiều thành tích vượt trội trong các kỳ thi sau khóa học.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-surface p-4 rounded-xl border border-outline-variant/30 text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs uppercase font-bold text-on-surface-variant opacity-60">Năm kinh nghiệm</div>
              </div>
              <div className="bg-surface p-4 rounded-xl border border-outline-variant/30 text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-xs uppercase font-bold text-on-surface-variant opacity-60">Học viên thành công</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Programs Section */}
        <section className="py-12 md:py-24 px-6 bg-surface-green">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <motion.div {...fadeInUp} className="flex flex-col gap-2 items-center text-center">
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Tuyển sinh mới - Hè 2026</span>
              <h2 className="font-lexend text-2xl md:text-3xl text-on-surface font-bold">Chương trình đào tạo</h2>
              <div className="h-1.5 w-16 bg-secondary-container rounded-full mt-2"></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800",
                  title: "Mầm non", 
                  subtitle: "3-6 tuổi", 
                  desc: "Xây dựng nền tảng từ sớm với phương pháp chơi mà học sinh động.",
                  color: "text-pink-500",
                  bg: "bg-pink-50"
                },
                { 
                  image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
                  title: "Học sinh", 
                  subtitle: "Lớp 1 - Lớp 12", 
                  desc: "Bám sát chương trình bộ GD&ĐT, củng cố và nâng cao kiến thức.",
                  color: "text-blue-500",
                  bg: "bg-blue-50"
                },
                { 
                  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
                  title: "Giao Tiếp", 
                  subtitle: "Tự Nhiên", 
                  desc: "Tập trung phản xạ thực tế, giúp học viên tự tin giao tiếp hiệu quả.",
                  color: "text-primary",
                  bg: "bg-green-50"
                },
                { 
                  image: "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?auto=format&fit=crop&q=80&w=800",
                  title: "Ôn Thi", 
                  subtitle: "Vào 10 & THPTQG", 
                  desc: "Luyện đề trọng tâm, phương pháp giải nhanh, cam kết điểm số cao.",
                  color: "text-orange-500",
                  bg: "bg-orange-50"
                }
              ].map((p, i) => (
                <motion.div 
                  key={i}
                  {...fadeInUp}
                  className="bg-surface rounded-2xl shadow-level-1 border border-outline-variant/30 flex flex-col group hover:border-primary/50 transition-all hover:-translate-y-1 overflow-hidden"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-on-surface">{p.title}</h3>
                    <p className={`text-xs font-bold ${p.color} opacity-80 uppercase tracking-wider`}>{p.subtitle}</p>
                    <p className="text-sm text-on-surface-variant mt-2 line-clamp-2 md:line-clamp-none">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Featured Course Banner */}
            <motion.div 
              {...fadeInUp}
              className="relative rounded-3xl overflow-hidden shadow-xl aspect-[21/9] min-h-[300px] group cursor-pointer"
            >
              <img 
                alt="IELTS Mastery" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-on-surface/90 via-on-surface/40 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 text-white max-w-xl gap-4">
                <div className="flex items-center gap-2">
                  <span className="bg-secondary-container text-on-secondary-container text-xs font-bold px-3 py-1 rounded-full">KHOÁ HỌC NỔI BẬT</span>
                  <Sparkles className="w-4 h-4 text-secondary-container fill-secondary-container" />
                </div>
                <h3 className="font-lexend text-3xl md:text-5xl font-bold">IELTS Mastery</h3>
                <p className="text-sm md:text-base opacity-90 hidden sm:block leading-relaxed">
                  Lộ trình cá nhân hoá giúp bạn đạt target 7.0+ trong thời gian ngắn nhất. Cam kết lộ trình học bài bản và hiệu quả vượt trội.
                </p>
                <div className="flex items-center gap-2 font-bold text-sm group-hover:gap-4 transition-all w-fit bg-primary px-8 py-4 rounded-xl mt-4 shadow-lg shadow-primary/20">
                  Tìm hiểu chương trình <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
            
            <motion.button 
              {...fadeInUp}
              className="mx-auto w-fit bg-white border-2 border-primary text-primary font-bold px-12 py-4 rounded-xl text-center hover:bg-primary hover:text-white transition-all shadow-lg shadow-primary/10"
            >
              Xem tất cả khóa học
            </motion.button>
          </div>
        </section>

        {/* AI Smart Learning Section */}
        <section className="py-20 px-6 relative overflow-hidden">
          {/* Decorative AI Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <motion.div {...fadeInUp} className="flex flex-col gap-4 items-center text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full border border-primary/20">
                <Cpu className="w-4 h-4 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest">Công nghệ AI tiên phong</span>
              </div>
              <h2 className="font-lexend text-3xl md:text-5xl text-on-surface font-bold tracking-tight">
                Ứng dụng công nghệ độc quyền <br className="hidden md:block" /> chỉ có tại <span className="text-primary">English Mrs. Dung</span>
              </h2>
              <p className="text-on-surface-variant max-w-2xl leading-relaxed">
                Trải nghiệm hệ sinh thái học tập hiện đại, giúp tối ưu hóa thời gian và nâng cao hiệu quả kỹ năng tiếng Anh vượt trội.
              </p>
            </motion.div>

            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { 
                  icon: Brain, 
                  title: "Learning", 
                  image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800",
                  desc: "Kho tài liệu thông minh & lộ trình cá nhân hóa từ AI giúp bạn nắm bắt kiến thức nhanh hơn 3 lần.",
                  color: "bg-blue-600",
                  shadow: "shadow-blue-500/30",
                  link: "https://mrsdung.vercel.app/"
                },
                { 
                  icon: PenTool, 
                  title: "Writing", 
                  image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
                  desc: "Chấm chữa bài viết AI ngay lập tức, sửa lỗi ngữ pháp và gợi ý cách dùng từ vựng nâng cao.",
                  color: "bg-indigo-600",
                  shadow: "shadow-indigo-500/30",
                  link: "https://writingpro.vercel.app/"
                },
                { 
                  icon: MicVocal, 
                  title: "Speaking", 
                  image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&q=80&w=800",
                  desc: "Luyện phát âm chuẩn bản xứ với trí tuệ nhân tạo, phản hồi chính xác từng âm tiết trong thời gian thực.",
                  color: "bg-rose-600",
                  shadow: "shadow-rose-500/30",
                  link: "https://engspeak-p3eu.vercel.app/"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -12 }}
                  className="group relative bg-white rounded-[2rem] shadow-level-1 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-outline-variant/20"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={item.image} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt={item.title}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute top-4 left-4 w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg ${item.shadow}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-4 transition-all uppercase tracking-widest"
                      >
                        Kết nối AI ngay <ArrowRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-4 transition-all uppercase tracking-widest opacity-60">
                        Sắp ra mắt <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Entertainment & Self-Study resources */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col gap-16">
            <motion.div {...fadeInUp} className="flex flex-col gap-4 items-center text-center">
              <h2 className="font-lexend text-3xl md:text-5xl text-on-surface font-bold">
                Tài nguyên <span className="text-primary text-opacity-80">Học mà chơi</span>
              </h2>
              <div className="h-1.5 w-24 bg-secondary-container rounded-full"></div>
              <p className="text-on-surface-variant max-w-2xl text-lg">
                Khám phá kho tàng giải trí và rèn luyện kỹ năng tự học mỗi ngày hoàn toàn miễn phí.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Fun English Section */}
              <motion.div 
                {...fadeInUp}
                className="group p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20"
              >
                {/* Background Image with Overlay */}
                <img 
                  src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=1200"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt="Fun English Background"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-transparent"></div>
                
                <div className="flex flex-col gap-8 relative z-10 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl">
                      <Play className="w-8 h-8 fill-current" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">Vui nhộn với Tiếng Anh</h3>
                      <p className="text-white/80 font-medium">Video, Truyện & Trò chơi</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl flex items-center gap-3 border border-white/10">
                      <Video className="w-5 h-5" />
                      <span className="text-sm font-bold">Video sinh động</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl flex items-center gap-3 border border-white/10">
                      <BookOpen className="w-5 h-5" />
                      <span className="text-sm font-bold">Truyện song ngữ</span>
                    </div>
                  </div>

                  <p className="text-white/90 leading-relaxed font-medium">
                    Tổng hợp các nội dung hấp dẫn dành cho trẻ em và người mới bắt đầu. Học tiếng Anh qua những câu chuyện kể và giai điệu vui vẻ.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {[
                      { icon: Music, text: "Nhạc vui nhộn" },
                      { icon: Gamepad2, text: "Mini Games" },
                      { icon: Languages, text: "Truyện song ngữ" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 text-xs font-bold">
                        <item.icon className="w-3 h-3" />
                        {item.text}
                      </div>
                    ))}
                  </div>

                  <a 
                    href="https://www.tienganhchotreem.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-secondary-container text-primary font-bold py-5 px-8 rounded-2xl self-start hover:shadow-2xl hover:-translate-y-1 transition-all"
                  >
                    Khám phá ngay <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>

              {/* Dictation Practice Section */}
              <motion.div 
                {...fadeInUp}
                className="group p-10 rounded-[3.5rem] relative overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-secondary/20"
              >
                {/* Background Image with Overlay */}
                <img 
                  src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt="Dictation Practice Background"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/80 to-transparent"></div>

                <div className="flex flex-col gap-8 relative z-10 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl">
                      <Headphones className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">Luyện nghe chép</h3>
                      <p className="text-white/80 font-medium">Daily Dictation Exercises</p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-2 mb-2 text-secondary-container">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-widest text-white">Phương pháp hiệu quả nhất</span>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed font-medium">
                      Nghe và chép lại giúp bạn cải thiện khả năng nghe hiểu, từ vựng và ngữ pháp một cách đồng bộ.
                    </p>
                  </div>

                  <p className="text-white/90 leading-relaxed font-medium">
                    Rèn luyện đôi tai nhạy bén với hàng ngàn bài tập từ cơ bản đến nâng cao. Cam kết tiến bộ rõ rệt chỉ sau 30 ngày luyện tập đều đặn.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {[
                      { icon: Zap, text: "Phản xạ nhanh" },
                      { icon: Star, text: "Nâng band điểm" },
                      { icon: Heart, text: "Hứng thú học" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 text-xs font-bold">
                        <item.icon className="w-3 h-3" />
                        {item.text}
                      </div>
                    ))}
                  </div>

                  <a 
                    href="https://dailydictation.com/exercises" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-secondary font-bold py-5 px-8 rounded-2xl self-start hover:shadow-2xl hover:-translate-y-1 transition-all"
                  >
                    Bắt đầu luyện tập <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Special AI Bonus Section: Sesame AI Speaking */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              {...fadeInUp}
              className="bg-white rounded-[4rem] p-8 md:p-16 shadow-2xl border-4 border-primary/10 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
              
              <div className="w-full md:w-1/3 flex justify-center order-2 md:order-1 relative">
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800" 
                    alt="AI Buddy Illustration"
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-[3rem] shadow-2xl border-8 border-white"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-[#fcd400] p-4 rounded-full shadow-lg border-4 border-white">
                    <Sparkles className="w-8 h-8 text-primary shadow-sm" />
                  </div>
                </motion.div>
              </div>

              <div className="w-full md:w-2/3 flex flex-col gap-6 order-1 md:order-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-secondary-container text-primary px-4 py-2 rounded-full w-fit mx-auto md:mx-0">
                  <Star className="w-5 h-5 fill-secondary" />
                  <span className="text-sm font-bold uppercase tracking-widest">Tính năng đặc biệt</span>
                </div>
                <h2 className="font-lexend text-3xl md:text-5xl font-bold text-on-surface leading-tight">
                  Tự tin giao tiếp cùng <br className="hidden md:block" /> <span className="text-primary italic">AI Buddy</span> miễn phí!
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
                  Bạn lo lắng khi nói tiếng Anh? Đừng sợ! Hãy luyện tập cùng người bạn AI siêu thông minh và ngộ nghĩnh này mỗi ngày để phản xạ nói tự nhiên, lưu loát hơn mỗi ngày. 
                </p>
                <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-2xl border border-outline-variant/30 text-sm font-bold text-primary">
                    <CheckCircle2 className="w-4 h-4" /> Hoàn toàn miễn phí
                  </div>
                  <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-2xl border border-outline-variant/30 text-sm font-bold text-primary">
                    <Zap className="w-4 h-4" /> Phản hồi 1-1 tức thì
                  </div>
                </div>
                <a 
                  href="https://app.sesame.com/?_gl=1*18kgknd*_ga*MTEyNTA0MjA3OS4xNzc4MDgxNzYy*_ga_ZZLPJBMBEN*czE3NzgxMTE2NzkkbzIkZzAkdDE3NzgxMTE2NzkkajYwJGwwJGgw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 bg-primary text-white font-bold py-5 px-10 rounded-2xl self-center md:self-start shadow-xl shadow-primary/30 hover:bg-primary-container hover:-translate-y-1 transition-all active:scale-[0.98] flex items-center gap-3 text-lg group"
                >
                  Bắt đầu luyện nói ngay <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Activities Gallery Section */}
        <section className="py-24 px-6 bg-surface-variant/20 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col gap-16">
            <motion.div {...fadeInUp} className="flex flex-col gap-4 text-center items-center">
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Moments of Joy</span>
              <h2 className="font-lexend text-3xl md:text-5xl text-on-surface font-bold">
                Khoảnh khắc tại <span className="text-primary">Trung tâm</span>
              </h2>
              <div className="h-1.5 w-24 bg-secondary-container rounded-full mb-4"></div>
              <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed text-center">
                Tại English Mrs. Dung, học tập không chỉ giới hạn trong sách vở. Chúng tôi kiến tạo một cộng đồng năng động, nơi tiếng Anh trở thành ngôn ngữ của niềm vui, sự sẻ chia và những trải nghiệm thực tế đáng nhớ.
              </p>
            </motion.div>

            {/* Masonry-style Grid */}
            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]"
            >
              {[
                { url: "https://i.postimg.cc/RZm4xF12/1727873785610981139.jpg", size: "md:row-span-2 md:col-span-2", title: "Lớp học sôi nổi" },
                { url: "https://i.postimg.cc/mhXqGfnW/678111433140660733.jpg", size: "md:row-span-1 md:col-span-1", title: "Tự tin giao tiếp" },
                { url: "https://i.postimg.cc/dVFwc1Rz/1727873785610981139-(1).jpg", size: "md:row-span-2 md:col-span-1", title: "Năng lượng tích cực" },
                { url: "https://i.postimg.cc/YC7MB9N5/2655317141404378600.jpg", size: "md:row-span-1 md:col-span-1", title: "Trải nghiệm thực tế" },
                { url: "https://i.postimg.cc/xqT77T6f/495912959986367970-(1).jpg", size: "md:row-span-1 md:col-span-2", title: "Hành trình chinh phục" },
                { url: "https://i.postimg.cc/9z8Sj5k5/678111433140660733-(1).jpg", size: "md:row-span-1 md:col-span-2", title: "Cộng đồng hạnh phúc" }
              ].map((img, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className={`group relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-lg ${img.size}`}
                >
                  <img 
                    src={img.url} 
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 md:p-8">
                    <div className="text-white">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#fcd400] mb-1">Activity</p>
                      <h4 className="text-lg font-bold">{img.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>

      {/* Registration Section (Moved above footer) */}
      <section id="register" className="py-20 px-6 bg-surface-variant/30">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-outline-variant/10 relative overflow-hidden">
            <div className="absolute top-8 right-8 text-primary/10">
              <Sparkles className="w-16 h-16" />
            </div>
            
            <div className="flex flex-col gap-8 relative z-10">
              <div className="flex flex-col gap-2 text-center items-center">
                <h3 className="font-lexend text-3xl md:text-4xl font-bold text-on-surface">Để lại thông tin tư vấn</h3>
                <p className="text-on-surface-variant max-w-md italic">Nhận lộ trình cá nhân hóa và ưu đãi học phí đặc biệt ngay hôm nay.</p>
                <div className="h-1.5 w-20 bg-secondary-container rounded-full mt-2"></div>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 group">
                  <label className="text-xs font-bold text-primary uppercase tracking-widest px-1">Họ và tên</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/40 group-focus-within:text-primary transition-colors" />
                    <input className="w-full rounded-2xl border border-outline-variant/40 focus:border-primary focus:ring-4 focus:ring-primary/5 bg-surface-container-lowest py-4 pl-12 pr-4 outline-none transition-all" placeholder="Nguyễn Văn A" type="text" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 group">
                  <label className="text-xs font-bold text-primary uppercase tracking-widest px-1">Số điện thoại</label>
                  <div className="relative">
                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/40 group-focus-within:text-primary transition-colors" />
                    <input className="w-full rounded-2xl border border-outline-variant/40 focus:border-primary focus:ring-4 focus:ring-primary/5 bg-surface-container-lowest py-4 pl-12 pr-4 outline-none transition-all" placeholder="09xx xxx xxx" type="tel" />
                  </div>
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <button className="bg-primary text-white font-bold py-5 rounded-2xl w-full shadow-xl shadow-primary/30 hover:bg-primary-container hover:-translate-y-1 transition-all active:scale-[0.98] flex items-center justify-center gap-3" type="submit">
                    Nhận tư vấn miễn phí <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer - Dark Green Design */}
      <footer id="footer" className="bg-[#0a4223] text-white pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start">
          
          {/* Column 1: Logo & Tagline */}
          <motion.div {...fadeInUp} className="flex flex-col items-center md:items-start gap-4">
            <div className="w-32 h-32 bg-white rounded-[2rem] p-4 border-4 border-[#fcd400] flex items-center justify-center shadow-2xl rotate-3 overflow-hidden">
              <img 
                src="https://i.postimg.cc/SR9H8vjC/317271424149767020.jpg" 
                alt="English Mrs. Dung Logo" 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left mt-2">
              <h2 className="font-lexend text-2xl font-bold text-[#fcd400] tracking-wider uppercase">English Mrs. Dung</h2>
              <p className="text-sm italic font-medium text-white/90">“English with Heart. Success with Mrs. Dung”</p>
            </div>
          </motion.div>

          {/* Column 2: Contact Information */}
          <motion.div {...fadeInUp} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 pb-2">
              <h3 className="font-lexend text-xl font-bold text-[#fcd400] uppercase tracking-widest">Liên hệ</h3>
              <div className="h-0.5 w-full bg-white/10 relative">
                <div className="absolute left-0 top-0 h-full w-12 bg-[#fcd400]"></div>
              </div>
            </div>
            
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3 group">
                <span className="shrink-0 p-1.5 rounded-lg bg-pink-500/20 text-pink-400">
                  <MapPin className="w-5 h-5" />
                </span>
                <p className="text-sm font-bold leading-relaxed group-hover:text-[#fcd400] transition-colors">
                  Ngõ 717 Mạc Đăng Doanh, Hải Phòng.
                </p>
              </div>
              
              <div className="flex items-start gap-3 group">
                <span className="shrink-0 p-1.5 rounded-lg bg-pink-500/20 text-pink-400">
                  <Phone className="w-5 h-5" />
                </span>
                <p className="text-sm font-bold group-hover:text-[#fcd400] transition-colors">
                  Mrs.Dung: 0364409436
                </p>
              </div>

              <div className="flex items-start gap-3 group">
                <span className="shrink-0 p-1.5 rounded-lg bg-blue-400/20 text-blue-300">
                  <Mail className="w-5 h-5" />
                </span>
                <p className="text-sm font-bold group-hover:text-[#fcd400] transition-colors">
                  nguyendungvn8@gmail.com
                </p>
              </div>

              <div className="flex items-start gap-3 group">
                <span className="shrink-0 p-1.5 rounded-lg bg-blue-500/20 text-cyan-300">
                  <Globe className="w-5 h-5" />
                </span>
                <a href="https://www.facebook.com/profile.php?id=100054264771359" target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline group-hover:text-[#fcd400] transition-colors">
                  Fanpage Facebook
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Slogan Box */}
          <motion.div {...fadeInUp} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 pb-2">
              <h3 className="font-lexend text-xl font-bold text-[#fcd400] uppercase tracking-widest">Slogan</h3>
              <div className="h-0.5 w-full bg-white/10 relative">
                <div className="absolute left-0 top-0 h-full w-12 bg-[#fcd400]"></div>
              </div>
            </div>

            <div className="bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col gap-4 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
              <p className="text-lg italic font-bold text-white relative z-10 leading-relaxed">
                “English with Heart. Success with Mrs. Dung”
              </p>
              <p className="text-sm font-bold text-[#fcd400] uppercase tracking-widest relative z-10">
                Học tiếng anh bằng cả trái tim.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/40">
          <p>© 2024 English Mrs. Dung. Môi trường Anh ngữ Tận tâm & Hiệu quả.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

