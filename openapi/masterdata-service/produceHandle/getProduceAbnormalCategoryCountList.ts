import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/生产事件管理/getProduceAbnormalCategoryCountListUsingPOST
export default function fetchMethod(data: IProductionExceptionTypeStatisticsVO1, params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultListProductionExceptionTypeStatisticsVO>(
        {
            url: "/masterdata-service/produceHandle/getProduceAbnormalCategoryCountList",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
// 生产异常类型统计VO_1
export interface IProductionExceptionTypeStatisticsVO1 {
    // 所属分类
    type: string;
    // 处理状态
    status: string;
    // 业务类型
    businessType: string;
    // 所属物料ids
    materialIds: number[];
    // 开始时间
    startTime: string;
    // 结束时间
    endTime: string;
}
// JSONResult«List«生产异常类型统计VO»»
export interface IJSONResultListProductionExceptionTypeStatisticsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionExceptionTypeStatisticsVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产异常类型统计VO
export interface IProductionExceptionTypeStatisticsVO {
    // 异常类型id
    categoryId: number;
    // 异常类型名
    categoryName: string;
    // 异常类型数量
    quantity: number;
}
