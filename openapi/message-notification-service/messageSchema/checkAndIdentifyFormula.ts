import { http } from "@/api/http";

/**
* @link http://47.108.139.107:17600/doc.html#/default/消息方案/checkAndIdentifyFormulaUsingPOST
*/
export default function fetchMethod(options: { data: IFormulaCheckRequestDTO }, extraOptions?: any) {
    return http<IJSONResultFormulaCheckResponseDTO>(
        {
            url: "/message-notification-service/messageSchema/checkAndIdentifyFormula",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** FormulaCheckRequestDTO */
export interface IFormulaCheckRequestDTO {
    /** 公式 */
    formula?: string;
    /** 应用编码 */
    applicationCode?: string;
}
/** JSONResult«FormulaCheckResponseDTO» */
export interface IJSONResultFormulaCheckResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFormulaCheckResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** FormulaCheckResponseDTO */
export interface IFormulaCheckResponseDTO {
    /** 是否有效公式 */
    isEffectiveFormula?: EFormulaCheckResponseDTO_isEffectiveFormula;
    /** 是否有效公式类型 */
    messageExpressionType?: EFormulaCheckResponseDTO_messageExpressionType;
    /** 消息 */
    message?: string;
}

export enum EFormulaCheckResponseDTO_isEffectiveFormula {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EFormulaCheckResponseDTO_messageExpressionType {
    /** 无表达式，就是有且唯一字段 */
    NONE = "NONE",
    /** 日期函数表达式，即有NOW(), TODAY() */
    TIME_FUNCTION = "TIME_FUNCTION",
    /** 聚合函数表达式，即有SUM/MAX/MIN/AVG/COUNT/+,-,*,/ */
    MATH_FUNCTION = "MATH_FUNCTION"
}
