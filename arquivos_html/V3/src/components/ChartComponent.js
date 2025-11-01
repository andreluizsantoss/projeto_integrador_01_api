const { useRef, useEffect } = React;

// Componente de Dashboard
export function ChartComponent({ type, data, options, title, className = "" }) {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartRef.current && data) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: type,
                data: data,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    ...options
                }
            });
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [type, data, options]);

    return (
        <div className={`chart-card ${className}`}>
            <h3>{title}</h3>
            <div style={{ 
                height: className.includes('mini') ? '170px' : '250px',
                position: 'relative',
                overflow: 'visible'
            }}>
                <canvas ref={chartRef} style={{
                    maxWidth: '100%',
                    maxHeight: '100%'
                }}></canvas>
            </div>
        </div>
    );
}