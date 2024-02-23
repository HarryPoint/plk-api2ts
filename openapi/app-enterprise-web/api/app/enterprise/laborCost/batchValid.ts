import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/工费相关/batchValidUsingPOST_2
export default function fetchMethod(data: IEnableOrDisableVOInBatches) {
    return post<IJSONResultobject['data']>({
      url: "/app-enterprise-web/api/app/enterprise/laborCost/batchValid",
      data,
    });
}
// 批量启用or停用VO
export interface IEnableOrDisableVOInBatches {
    // id集合
    ids: number[];
    // 状态
    dataStatus: number;
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
