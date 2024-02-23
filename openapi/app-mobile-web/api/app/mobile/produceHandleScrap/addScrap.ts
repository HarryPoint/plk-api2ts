import { http } from '@/api/http';

// http://47.108.139.107:17400/doc.html#/default/生产报废服务相关/addScrapUsingPOST
export default function fetchMethod(data: IProductionScrapTreatment) {
    return http<IJSONResultobject>({
        url: "/app-mobile-web/api/app/mobile/produceHandleScrap/addScrap",
        method: "post",
        data,
    });
}
// 生产报废处理
export interface IProductionScrapTreatment {
    // 生产任务id
    produceTaskId: number;
    // 生产异常类型id
    produceAbnormalCategoryId: number;
    // 报废数量
    abnormalQuantity: number;
    // 标签id集合
    tagIds: number[];
    // 图片key集合
    imageKeys: string[];
    // 描述
    description: string;
    // 对应批次id
    lotOrderId: number;
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
