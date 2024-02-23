import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/计算方案相关/disableBatchUsingPOST
export default function fetchMethod(data: ITheComputingSchemeDisablesTheRequestDTO, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/flow-service/calculationPlan/disableBatch",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 计算方案禁用请求DTO
export interface ITheComputingSchemeDisablesTheRequestDTO {
    // 计算方案ID列表
    idList: number[];
}
// JSONResult«string»
export interface IJSONResultstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
