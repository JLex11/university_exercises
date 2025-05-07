import { Stack } from '../data-structures/Stack'
import { NavigationHistoryItem } from '../types'

interface NavigationPanelProps {
  history: Stack<NavigationHistoryItem>
  onHistoryItemClick: (item: NavigationHistoryItem) => void
}

export default function NavigationPanel({
  history,
  onHistoryItemClick,
}: NavigationPanelProps) {
  const historyItems = history.getItems()

  return (
    <div className='bg-gray-50 rounded-lg p-4 shadow flex-1 overflow-auto'>
      <h3 className='text-lg font-semibold mb-3'>Historial de Navegación</h3>
      {historyItems.length === 0 ? (
        <p className='text-gray-500'>No hay historial de navegación</p>
      ) : (
        <ul className='divide-y divide-gray-200'>
          {historyItems.map((item, index) => (
            <li
              key={index}
              onClick={() => onHistoryItemClick(item)}
              className='py-3 hover:bg-gray-100 cursor-pointer'
            >
              <div className='flex flex-col'>
                <div className='flex items-center gap-2 mb-1'>
                  <span className='font-medium'>{item.from.name}</span>
                  <span className='text-gray-500'>→</span>
                  <span className='font-medium'>{item.to.name}</span>
                </div>
                <div className='flex justify-between text-sm text-gray-500'>
                  <span>{new Date(item.timestamp).toLocaleTimeString()}</span>
                  <span>{item.route.distance.toFixed(1)} km</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
