type SaleStatus = 'pago' | 'processando' | 'falha';

type PaymentMethod = 'boleto' | 'pix' | 'cartao';

export interface Sale {
  id: string;
  nome: string;
  preco: number;
  status: SaleStatus;
  pagamento: PaymentMethod;
  parcelas: number | null;
  data: string;
}
