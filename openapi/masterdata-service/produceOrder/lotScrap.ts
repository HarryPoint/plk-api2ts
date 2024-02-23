import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/生产订单相关/lotScrapUsingPOST_1
export default function fetchMethod(data: IBatchScrapDTO, params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/produceOrder/lotScrap",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
// 批次报废DTO
export interface IBatchScrapDTO {
    // wipRpId
    wipRpId: number;
    // 生产异常类型id
    produceAbnormalCategoryId: number;
    // 报废数量
    scrapCount: number;
    // 备注
    remark: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
