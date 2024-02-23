import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/工费相关/batchRemoveUsingPOST_4
export default function fetchMethod(data: IIdCollectionInformation) {
    return post<IJSONResultobject>({
      url: "/masterdata-service/laborCost/batchRemove",
      data,
    });
}
// id集合信息
export interface IIdCollectionInformation {
    // id集合
    ids: number[];
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
