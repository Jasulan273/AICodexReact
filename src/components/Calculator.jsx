import { useState } from 'react';

export default function TaxCalculator() {
  const [activeTab, setActiveTab] = useState('nds');
  const [inputAmount, setInputAmount] = useState('');
  const [result, setResult] = useState(null);

  const calculateTax = () => {
    const amount = parseFloat(inputAmount);
    if (isNaN(amount)) return;

    switch (activeTab) {
      case 'nds':
        setResult({
          tax: amount * 0.12,
          total: amount * 1.12
        });
        break;
      case 'ipn':
        // Ставка ИПН 10% (упрощенный расчет)
        setResult({
          tax: amount * 0.1,
          netAmount: amount * 0.9
        });
        break;
      case 'social':
        // Социальные отчисления 3.5% (для ИП)
        setResult({
          tax: amount * 0.035,
          netAmount: amount * 0.965
        });
        break;
      default:
        setResult(null);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('kz-KZ', {
      style: 'currency',
      currency: 'KZT'
    }).format(value);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Налоговый калькулятор РК</h2>
      
      <div className="flex border-b mb-4">
        <button
          className={`px-4 py-2 ${activeTab === 'nds' ? 'border-b-2 border-blue-500 font-medium' : ''}`}
          onClick={() => setActiveTab('nds')}
        >
          НДС 12%
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'ipn' ? 'border-b-2 border-blue-500 font-medium' : ''}`}
          onClick={() => setActiveTab('ipn')}
        >
          ИПН 10%
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'social' ? 'border-b-2 border-blue-500 font-medium' : ''}`}
          onClick={() => setActiveTab('social')}
        >
          Соц. отчисления 3.5%
        </button>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Сумма:
          <input
            type="number"
            value={inputAmount}
            onChange={(e) => setInputAmount(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            placeholder="Введите сумму в KZT"
          />
        </label>
        
        <button
          onClick={calculateTax}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Рассчитать
        </button>
      </div>

      {result && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-bold mb-2">Результат:</h3>
          
          {activeTab === 'nds' && (
            <div className="space-y-2">
              <p>Сумма без НДС: <span className="font-semibold">{formatCurrency(inputAmount)}</span></p>
              <p>НДС (12%): <span className="font-semibold text-red-600">{formatCurrency(result.tax)}</span></p>
              <p>Итого с НДС: <span className="font-semibold text-green-600">{formatCurrency(result.total)}</span></p>
            </div>
          )}

          {activeTab === 'ipn' && (
            <div className="space-y-2">
              <p>Доход: <span className="font-semibold">{formatCurrency(inputAmount)}</span></p>
              <p>ИПН (10%): <span className="font-semibold text-red-600">{formatCurrency(result.tax)}</span></p>
              <p>Чистый доход: <span className="font-semibold text-green-600">{formatCurrency(result.netAmount)}</span></p>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="space-y-2">
              <p>Доход: <span className="font-semibold">{formatCurrency(inputAmount)}</span></p>
              <p>Соц. отчисления (3.5%): <span className="font-semibold text-red-600">{formatCurrency(result.tax)}</span></p>
              <p>После отчислений: <span className="font-semibold text-green-600">{formatCurrency(result.netAmount)}</span></p>
            </div>
          )}
        </div>
      )}

      <div className="mt-6 text-sm text-gray-600">
        <h4 className="font-bold mb-1">Справка:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>НДС - 12% (ст. 268 НК РК)</li>
          <li>ИПН - 10% для доходов (ст. 158 НК РК)</li>
          <li>Социальные отчисления - 3.5% для ИП (ст. 481 НК РК)</li>
        </ul>
      </div>
    </div>
  );
}