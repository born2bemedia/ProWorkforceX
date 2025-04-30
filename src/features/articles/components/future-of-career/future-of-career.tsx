'use client';

import Image from 'next/image';

import { List } from '@/shared/ui/components/list';
import { Text } from '@/shared/ui/kit/text';

import { ArticleHeader } from '../article-header';
import { ArticleHeading } from '../article-heading';
import { ArticleLayout } from '../article-layout';
import st from './future-of-career.module.scss';

export function FutureOfCareer() {
  return (
    <ArticleLayout>
      <ArticleHeading
        title="The Future of Career Development"
        excerpt="What’s Next in Employee Growth?"
        number={1}
      />
      <Text color="primary" size="lg" weight={300}>
        In today’s rapidly evolving job market, career development is no longer
        just about climbing the corporate ladder in a traditional sense. The
        landscape of professional growth has shifted dramatically in recent
        years, influenced by technological advancements, changing work
        environments, and an increased focus on employee well-being. As
        companies adapt to these shifts, the way they invest in employee
        development is evolving, too. <br />
        <br /> In this article, we will explore{' '}
        <strong>the future of career development</strong>, the key trends
        shaping it, and how both employees and employers can stay ahead of the
        curve.
      </Text>
      <section>
        <ArticleHeader>
          1. Emphasis on Skill-Building Over Traditional Degrees
        </ArticleHeader>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          Formal education and degrees were the primary benchmarks for career
          advancement for decades. However, the shift toward skill-based hiring
          is changing this landscape. Companies are increasingly valuing
          <strong>practical skills</strong> and{' '}
          <strong>hands-on experience</strong> over traditional qualifications.
          According to a report from LinkedIn, 61% of talent professionals said
          that skills are now more important than degrees in determining
          candidates’ suitability for a role.
          <br />
          <br /> The future of career development will likely focus more on
          <strong>continuous learning</strong>. The rise of online courses,
          certifications, and industry-specific skill-building platforms allows
          employees to continually upgrade their expertise without needing
          expensive degree programs. Employees will increasingly take ownership
          of their career progression by seeking out and mastering high-demand
          skills.
        </Text>
        <List
          values={[
            'Actionable Tip for Employees: Invest in online learning platforms like Coursera, LinkedIn Learning, or Udemy to stay current with industry trends and enhance your skill set.',
            'Actionable Tip for Employers: Create a learning culture by offering subscriptions to learning platforms, sponsoring certifications, and encouraging employees to acquire new skills that benefit their personal growth and company performance.',
          ]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <section>
        <ArticleHeader>2. The Rise of Remote Work Opportunities</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginBottom: '16px' }}
        >
          The COVID-19 pandemic accelerated the transition to remote work, and
          it’s here to stay. According to a report by <strong>Gartner</strong>,
          47% of organizations plan to allow employees to work remotely
          full-time moving forward. Remote work offers employees greater
          flexibility, but it also presents challenges in terms of career
          development. <br />
          <br /> As remote work continues to be the norm, companies must adapt
          to provide <strong>remote career development opportunities</strong>.
          This includes offering virtual training, mentorship, and career
          progression paths that align with remote work models. The future of
          employee growth will include a balance between traditional
          office-based roles and virtual work that allows employees to thrive
          from anywhere.
        </Text>
        <List
          values={[
            'Actionable Tip for Employees: Embrace digital tools for career growth, such as Slack, Zoom, and Trello, to stay connected and manage remote work efficiently. Seek out virtual networking events and online communities to expand your professional network.',
            'Actionable Tip for Employers: Implement remote leadership training and coaching programs to support the growth of remote employees. Ensure all team members, whether remote or in-office, have equal development and career advancement opportunities.',
          ]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <div className={st.imgLayout}>
        <Image
          className={st.img}
          src="/images/resources/future-of-career/1.jpg"
          alt="1"
          height={343}
          width={1000}
        />
      </div>
      <section>
        <ArticleHeader>3. Personalized Career Development Paths</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginBottom: '16px' }}
        >
          Gone are the days when a “one-size-fits-all” approach to career
          development worked for everyone. Today’s employees seek{' '}
          <strong>personalized career growth</strong> plans that reflect their
          skills, passions, and long-term goals. They want to know how to grow
          within their roles and build careers that align with their values and
          aspirations. <br />
          <br /> Many businesses are shifting toward offering{' '}
          <strong>individualized career paths</strong> to accommodate this
          demand. This personalized approach to career development focuses on
          tailoring development opportunities based on an employee’s unique
          strengths and professional interests rather than placing them in
          predefined career tracks.
        </Text>
        <List
          values={[
            'Actionable Tip for Employees: Have regular check-ins with your managers to align your career development with your personal goals. Discuss training progra',
            'Actionable Tip for Employers: Conduct one-on-one meetings with employees to understand their career goals and create customized development plans. Provide access to mentorship programs, coaching, and tailored training to help them achieve their aspirations.',
          ]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <section>
        <ArticleHeader>
          4. The Integration of Artificial Intelligence in Career Development
        </ArticleHeader>
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginBottom: '16px' }}
        >
          AI is transforming many aspects of business, including{' '}
          <strong>career development</strong>. AI can significantly enhance an
          employee’s growth journey, from automating repetitive tasks to
          providing personalized recommendations. AI tools are already being
          used to analyze performance data and recommend learning resources
          based on an individual’s learning preferences and professional goals.
          <br />
          <br /> In the future, AI could also play a larger role in identifying
          <strong>skills gaps</strong>, creating tailored learning plans, and
          providing real-time feedback on employee performance. By leveraging
          AI, businesses can offer more{' '}
          <strong>dynamic career growth opportunities</strong> that are highly
          personalized and aligned with employee potential.
        </Text>
        <List
          values={[
            'Actionable Tip for Employees: Explore AI-driven learning platforms that offer personalized training recommendations based on your career goals.',
            'Actionable Tip for Employers: Leverage AI tools to assess employee skills, track performance, and recommend development programs that align with the needs of your business and employee growth.',
          ]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <div className={st.twoImgLayout}>
        <Image
          className={st.img}
          src="/images/resources/future-of-career/2.jpg"
          alt="2"
          width={1000}
          height={343}
        />
        <Image
          className={st.img}
          src="/images/resources/future-of-career/3.jpg"
          alt="3"
          width={1000}
          height={343}
        />
      </div>
      <section>
        <ArticleHeader>
          5. The Shift Toward Holistic Career Development
        </ArticleHeader>
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginBottom: '16px' }}
        >
          In the future, career development will not just focus on technical or
          professional skills but also holistic <strong>growth</strong>.
          Companies are beginning to realize that employee success is linked to
          overall well-being, including <strong>mental health</strong>,
          <strong>work-life balance</strong>, and{' '}
          <strong>personal development</strong>. Career growth will be deeply
          intertwined with personal development, focusing on emotional
          intelligence, stress management, and work-life harmony.
          <br />
          <br /> As such, businesses must invest in{' '}
          <strong>wellness programs</strong>,{' '}
          <strong>mental health resources</strong>, and{' '}
          <strong>personal development workshops</strong> to ensure employees
          are supported in every aspect of their lives. This holistic approach
          will enable employees to thrive at work and in their personal lives,
          leading to a more engaged and motivated workforce.
        </Text>
        <List
          values={[
            'Actionable Tip for Employees: Participate in well-being programs offered by your employer, and take the time to invest in your physical and mental health.',
            'Actionable Tip for Employers: Offer holistic career development programs focusing on professional skills, mental health support, work-life balance, and personal development.',
          ]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <section>
        <ArticleHeader>
          6. Remote Mentorship and Virtual Networking Opportunities
        </ArticleHeader>
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginBottom: '16px' }}
        >
          As businesses continue to operate remotely,{' '}
          <strong>virtual mentorship</strong> and{' '}
          <strong>online networking</strong> are essential to career
          development. These opportunities provide employees access to industry
          leaders and peers, even remotely. Virtual mentorship allows employees
          to seek advice, share experiences, and gain insights into career
          progression, regardless of geographical location.
          <br />
          <br /> In the future, <strong>
            virtual networking platforms
          </strong>{' '}
          will become even more integral to career development, offering
          employees access to a broader range of connections and career-building
          opportunities than ever before.
        </Text>
        <List
          values={[
            'Actionable Tip for Employees: Join online communities and virtual networking events to expand your professional network. For guidance, contact potential mentors via LinkedIn or other social platforms.',
            'Actionable Tip for Employers:  Create virtual networking events or mentorship programs to connect employees with industry experts and peers, helping them expand their professional network and gain valuable insights.',
          ]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <footer>
        <ArticleHeader>Conclusion: Stay Ahead of the Curve</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginBottom: '16px' }}
        >
          Career development is an ever-changing landscape influenced by
          technology, evolving work environments, and shifting employee
          expectations. Employees and employers must remain{' '}
          <strong>adaptable</strong> and committed to continuous learning, skill
          development, and personal growth to stay ahead of the competition. By
          embracing these trends, businesses can create an environment where
          employees can thrive, develop, and achieve their professional goals.
          <br /> <br />{' '}
          <strong>The future of career development is bright</strong>, and with
          the right approach, businesses and employees alike can stay ahead of
          the curve and enjoy long-term success. Whether you want to enhance
          your skills, navigate career transitions, or create a more engaged and
          productive workforce, now is the time to take the next step.
        </Text>
      </footer>
    </ArticleLayout>
  );
}
