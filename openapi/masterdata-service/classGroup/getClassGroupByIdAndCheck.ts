import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/班组相关/getClassGroupByIdAndCheckUsingGET
export default function fetchMethod(params: { enterpriseId: number; id: number }) {
    return get<IJSONResultVOGroup['data']>({
      url: "/masterdata-service/classGroup/getClassGroupByIdAndCheck",
      params,
    });
}
// JSONResult«班组VO»
export interface IJSONResultVOGroup {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITeamVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 班组VO
export interface ITeamVO {
    // id
    id: number;
    // 班组名称
    name: string;
    // 班组编号
    code: string;
    // 上级部门id
    departmentId: number;
}
