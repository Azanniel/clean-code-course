// SOLID

// - SRP
// - OCP
// - LSP
// - ISP
// - DIP

// billet, debit, credit

interface PaymentMethod {
  getDiscountAmount(amount: number): number
}

class Billet implements PaymentMethod {
  getDiscountAmount(amount: number): number {
    return amount * 0.10;
  }
}

class Credit implements PaymentMethod {
  private installments: number;

  constructor(installments: number) {
    this.installments = installments
  }

  getDiscountAmount(amount: number): number {
    if(this.installments === 1) {
      return amount * 0.05
    }

    if(this.installments <= 6) {
      return amount * 0.02;
    }

    return 0
  }
}

class Debit implements PaymentMethod {
  getDiscountAmount(amount: number): number {
    return amount * 0.10;
  }
}

class CalculateOrderDiscount {
  constructor(
    private paymentMethod: PaymentMethod
  ) {}

  public execute(amount: number) {
    return this.paymentMethod.getDiscountAmount(amount);
  }
}

const calculateOrderDiscount = new CalculateOrderDiscount(new Credit(6));

const orderDiscount = calculateOrderDiscount.execute(2000);

// class SubmitOrderInvoice {
//   public execute() {
//     // Emissão da nota fiscal
//   }
// }

// class CreateOrder {
//   public execute() {
//     // CalculateOrderDiscount
//     // SubmitOrderInvoice
//   }
// }