import './globals.css'

export const metadata = {
  title: 'Personal Website',
  description: 'Generated by create next app',
  viewport: 'width=device-width, initial-scale=1.0'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}