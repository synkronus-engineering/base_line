import RootStyleEmotionRegistry from './EmotionRootStyle'
import '@/src/styles/globals.css'

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <head />
        <body>
          <RootStyleEmotionRegistry>
            {children}
          </RootStyleEmotionRegistry>
        </body>
      </html>
  )
}