import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/动态数据相关/checkFiscalPeriodBatchUsingPOST
*/
export default function fetchMethod(options: { data: IFiscalPeriodCheckRequestDTO[] }, extraOptions?: any) {
    return http<IJSONResultListFiscalPeriodCheckResponseDTO>(
        {
            url: "/masterdata-service/dynamicData/checkFiscalPeriodBatch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** FiscalPeriodCheckRequestDTO */
export interface IFiscalPeriodCheckRequestDTO {
    /** 单据日期 */
    billDate?: number;
    /** 单据编码 */
    code?: string;
    /** 单据ID */
    id?: string;
}
/** JSONResult«List«FiscalPeriodCheckResponseDTO»» */
export interface IJSONResultListFiscalPeriodCheckResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IFiscalPeriodCheckResponseDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** FiscalPeriodCheckResponseDTO */
export interface IFiscalPeriodCheckResponseDTO {
    /** 结存状态 - 如果没有区间则返回空、如果区间存在则返回实际值 */
    balanceStatus?: EFiscalPeriodCheckResponseDTO_balanceStatus;
    /** 单据日期 */
    billDate?: number;
    /** 单据编码 */
    code?: string;
    /** 单据ID */
    id?: string;
    /** 期间/所属期间- 如果没有区间则返回空、如果区间存在则返回实际值 */
    period?: string;
}

export enum EFiscalPeriodCheckResponseDTO_balanceStatus {
    /** 未结存 */
    UNBALANCED = "UNBALANCED",
    /** 已结存 */
    BALANCED = "BALANCED"
}
