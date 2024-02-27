import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/动态数据相关/checkFiscalPeriodBatchUsingPOST
*/
export default function fetchMethod(options: { data: IFiscalPeriodCheckRequestDTO[] }, extraOptions?: any) {
    return http<IJSONResultListFiscalPeriodCheckResponseDTO>(
        {
            url: "/masterdata-service/dynamicData/checkFiscalPeriodBatch",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** FiscalPeriodCheckRequestDTO */
export interface IFiscalPeriodCheckRequestDTO {
    /** 单据ID */
    id?: string;
    /** 单据编码 */
    code?: string;
    /** 单据日期 */
    billDate?: number;
}
/** JSONResult«List«FiscalPeriodCheckResponseDTO»» */
export interface IJSONResultListFiscalPeriodCheckResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFiscalPeriodCheckResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** FiscalPeriodCheckResponseDTO */
export interface IFiscalPeriodCheckResponseDTO {
    /** 单据ID */
    id?: string;
    /** 单据编码 */
    code?: string;
    /** 单据日期 */
    billDate?: number;
    /** 结存状态 - 如果没有区间则返回空、如果区间存在则返回实际值 */
    balanceStatus?: EFiscalPeriodCheckResponseDTO_balanceStatus;
    /** 期间/所属期间- 如果没有区间则返回空、如果区间存在则返回实际值 */
    period?: string;
}

export enum EFiscalPeriodCheckResponseDTO_balanceStatus {
    /** 未结存 */
    UNBALANCED = "UNBALANCED",
    /** 已结存 */
    BALANCED = "BALANCED"
}
