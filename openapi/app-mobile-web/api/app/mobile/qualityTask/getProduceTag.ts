import { http } from '@/api/http';

// http://47.108.139.107:17400/doc.html#/default/质检任务相关/getProduceTagUsingGET_1
export default function fetchMethod(params: { type: string }) {
    return http<ITheJSONResultListExceptionTagReturnsVO>({
        url: "/app-mobile-web/api/app/mobile/qualityTask/getProduceTag",
        method: "get",
        params,
    });
}
// JSONResult«List«异常标签返回VO»»
export interface ITheJSONResultListExceptionTagReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheExceptionTagReturnsVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 异常标签返回VO
export interface ITheExceptionTagReturnsVO {
    // id
    id: number;
    // 所属分类
    type: string;
    // 所属分类
    typeDesc: string;
    // 标签名称
    name: string;
    // 标签编号
    code: string;
    // 是否启用
    dataStatus: number;
    // 创建人
    createUserId: number;
    // 创建人姓名
    createUsername: string;
    // 创建时间
    createTime: string;
}