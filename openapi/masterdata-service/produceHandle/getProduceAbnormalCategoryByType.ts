import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产事件管理/getProduceAbnormalCategoryByTypeUsingGET
export default function fetchMethod(params: { type: string; enterpriseId: number }) {
    return get<IJSONResultListIdNameNumberVO['data']>({
      url: "/masterdata-service/produceHandle/getProduceAbnormalCategoryByType",
      params,
    });
}
// JSONResult«List«Id，名称，编号VO»»
export interface IJSONResultListIdNameNumberVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IIdNameNumberVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// Id，名称，编号VO
export interface IIdNameNumberVO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
