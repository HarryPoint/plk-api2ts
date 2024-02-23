import { get } from '@/api/http';
 
// http://47.108.139.107:16500/doc.html#/default/流程表格相关/getIdCodeBySerialNoUsingGET
export default function fetchMethod(params: { enterpriseId: number; flowPathId: number; serialNo: string }) {
    return get<IJSONResultIdNameNumberVO['data']>({
      url: "/flow-service/flowPathTableColumn/getIdCodeBySerialNo",
      params,
    });
}
// JSONResult«Id，名称，编号VO»
export interface IJSONResultIdNameNumberVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IIdNameNumberVO;
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
