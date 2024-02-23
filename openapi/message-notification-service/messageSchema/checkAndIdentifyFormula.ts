import { post } from '@/api/http';
 
// http://47.108.139.107:17600/doc.html#/default/消息方案/checkAndIdentifyFormulaUsingPOST
export default function fetchMethod(data: IFormulaCheckRequestDTO) {
    return post<IJSONResultFormulaCheckResponseDTO['data']>({
      url: "/message-notification-service/messageSchema/checkAndIdentifyFormula",
      data,
    });
}
// FormulaCheckRequestDTO
export interface IFormulaCheckRequestDTO {
    // 公式
    formula: string;
    // 应用编码
    applicationCode: string;
}
// JSONResult«FormulaCheckResponseDTO»
export interface IJSONResultFormulaCheckResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IFormulaCheckResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// FormulaCheckResponseDTO
export interface IFormulaCheckResponseDTO {
    // 是否有效公式
    isEffectiveFormula: string;
    // 是否有效公式类型
    messageExpressionType: string;
    // 消息
    message: string;
}
