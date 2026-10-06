type SalesStatus = 'pago' | 'processando' | 'falha';

type PaymentMethod = 'boleto' | 'pix' | 'cartao';

export interface Sales {
  id: string;
  nome: string;
  preco: number;
  status: SalesStatus;
  pagamento: PaymentMethod;
  parcelas: number | null;
  data: string;
}
