import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/动态数据相关/checkFiscalPeriodBatchUsingPOST
export default function fetchMethod(data: IFiscalPeriodCheckRequestDTO[], extraOptions?: any) {
    return http<IJSONResultListFiscalPeriodCheckResponseDTO>(
        {
            url: "/masterdata-service/dynamicData/checkFiscalPeriodBatch",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// FiscalPeriodCheckRequestDTO
export interface IFiscalPeriodCheckRequestDTO {
    // 单据ID
    id: number;
    // 单据编码
    code: string;
    // 单据日期
    billDate: string;
}
// JSONResult«List«FiscalPeriodCheckResponseDTO»»
export interface IJSONResultListFiscalPeriodCheckResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IFiscalPeriodCheckResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// FiscalPeriodCheckResponseDTO
export interface IFiscalPeriodCheckResponseDTO {
    // 单据ID
    id: number;
    // 单据编码
    code: string;
    // 单据日期
    billDate: string;
    // 结存状态 - 如果没有区间则返回空、如果区间存在则返回实际值
    balanceStatus: string;
    // 期间/所属期间- 如果没有区间则返回空、如果区间存在则返回实际值
    period: string;
}
