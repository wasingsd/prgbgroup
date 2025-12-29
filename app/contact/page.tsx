"use client";

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Globe, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        topic: 'สอบถามบริการขนส่ง (Cargo)',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // TODO: REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyRpA7MOE9ECwDKrUWjO7HAmOTC8QI-ILJyW-PiEdd6A-RuW3xJu87oTXZy4ENn-H7d/exec";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.phone || !formData.message) {
            setErrorMessage('กรุณากรอกข้อมูลให้ครบถ้วน');
            setStatus('error');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            // Using fetch with no-cors mode for Google Apps Script
            // Note: In no-cors mode, we can't read the response status/body, 
            // so we assume success if no network error occurs.
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            setStatus('success');
            setFormData({ name: '', phone: '', topic: 'สอบถามบริการขนส่ง (Cargo)', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);

        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
            setErrorMessage('เกิดข้อผิดพลาดในการส่งข้อมูล โปรดลองใหม่อีกครั้ง');
        }
    };

    return (
        <div className="bg-soft-bg min-h-screen">
            <div className="bg-primary text-white pt-32 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">ติดต่อเรา</h1>
                    <p className="text-white/90">ทีมงานพร้อมให้คำปรึกษาและช่วยเหลือคุณ</p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-10 mb-20">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Contact Info */}
                    <div className="w-full md:w-1/3 bg-text-primary text-white p-10">
                        <h3 className="text-xl font-bold mb-8">ข้อมูลติดต่อ</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-primary mt-1" />
                                <div>
                                    <p className="font-bold mb-1">ที่อยู่บริษัท</p>
                                    <p className="text-white/70 text-sm">กรุงเทพมหานคร, ประเทศไทย</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="text-primary mt-1" />
                                <div>
                                    <p className="font-bold mb-1">โทรศัพท์</p>
                                    <p className="text-white/70 text-sm">096-897-8719 (สายด่วน)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="text-primary mt-1" />
                                <div>
                                    <p className="font-bold mb-1">อีเมล</p>
                                    <p className="text-white/70 text-sm">support@prgbgroup.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="text-primary mt-1" />
                                <div>
                                    <p className="font-bold mb-1">เวลาทำการ</p>
                                    <p className="text-white/70 text-sm">จันทร์ - ศุกร์: 09:00 - 18:00</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="font-bold mb-4">ช่องทาง Social</p>
                            <div className="flex gap-4">
                                <a href="https://www.tiktok.com/@korkame19" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer" title="TikTok">
                                    <Globe size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="w-full md:w-2/3 p-10">
                        <h3 className="text-2xl font-bold text-[#1F2937] mb-6">ส่งข้อความถึงเรา</h3>

                        {status === 'success' ? (
                            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-green-800 mb-2">ส่งข้อความเรียบร้อยแล้ว!</h4>
                                <p className="text-green-700">ขอบคุณสำหรับการติดต่อ ทีมงานจะรีบติดต่อกลับโดยเร็วที่สุดครับ</p>
                                <button onClick={() => setStatus('idle')} className="mt-6 text-green-700 font-semibold hover:text-green-900 underline">
                                    ส่งข้อความอื่นเพิ่มเติม
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-[#1F2937] mb-2">ชื่อ - นามสกุล <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none bg-white text-[#1F2937] transition-all"
                                            placeholder="ระบุชื่อของคุณ"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#1F2937] mb-2">เบอร์โทรศัพท์ <span className="text-red-500">*</span></label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none bg-white text-[#1F2937] transition-all"
                                            placeholder="ระบุเบอร์โทรศัพท์"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#1F2937] mb-2">หัวข้อเรื่อง</label>
                                    <select
                                        name="topic"
                                        value={formData.topic}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-[#1F2937] bg-white transition-all"
                                    >
                                        <option value="สอบถามบริการขนส่ง (Cargo)">สอบถามบริการขนส่ง (Cargo)</option>
                                        <option value="สอบถามบริการทัวร์ (Travel)">สอบถามบริการทัวร์ (Travel)</option>
                                        <option value="เสนอขายสินค้า/บริการ">เสนอขายสินค้า/บริการ</option>
                                        <option value="อื่นๆ">อื่นๆ</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#1F2937] mb-2">ข้อความ <span className="text-red-500">*</span></label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-primary focus:outline-none bg-white text-[#1F2937] transition-all"
                                        placeholder="รายละเอียดที่คุณต้องการสอบถาม..."
                                    ></textarea>
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">
                                        <AlertCircle size={20} />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-hover transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" /> กำลังส่งข้อมูล...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} /> ส่งข้อความ
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
