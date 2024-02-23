import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/区域相关/getVOByIdAndCheckUsingGET
export default function fetchMethod(params: { enterpriseId: number; id: number }) {
    return get<IJSONResultAreaVO>({
      url: "/masterdata-service/area/getVOByIdAndCheck",
      params,
    });
}
// JSONResult«区域VO»
export interface IJSONResultAreaVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IRegionalVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 区域VO
export interface IRegionalVO {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 区域名称
    name: string;
    // 区域编号
    code: string;
    // 父级id
    parentId: number;
}
