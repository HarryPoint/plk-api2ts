import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产任务分配相关/assignUsingPOST_1
export default function fetchMethod(data: IProductionTaskAssignmentVO, params: { enterpriseId: number }) {
    return post<IJSONResultobject['data']>({
      url: "/masterdata-service/produceTaskAssign/assign",
      data,
      params,
    });
}
// 生产任务分配VO
export interface IProductionTaskAssignmentVO {
    // 生产任务ids -- 单个分配时, 传递一个即可
    produceTaskIds: number[];
    // 分配人员ids -- 单个分配时, 传递一个即可
    assignUserIds: number[];
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
