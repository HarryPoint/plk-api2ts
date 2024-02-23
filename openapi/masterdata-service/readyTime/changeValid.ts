import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/准备期相关/changeValidUsingPOST_10
export default function fetchMethod(data: IEnableOrDisableVO, params: { enterpriseId: number }) {
    return post<IJSONResultobject>({
      url: "/masterdata-service/readyTime/changeValid",
      data,
      params,
    });
}
// 启用or停用VO
export interface IEnableOrDisableVO {
    // id
    id: number;
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
